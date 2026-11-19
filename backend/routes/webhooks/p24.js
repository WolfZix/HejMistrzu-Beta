const express = require("express");
const router = express.Router();
const pool = require("../../config/db");
const generateP24Sign = require("../../utils/p24Sign");
const { verifyTransaction } = require("../../services/p24Service");

router.post("/", async (req, res) => {
  try {
    const {
      merchantId,
      posId,
      sessionId,
      amount,
      originAmount,
      currency,
      orderId,
      methodId,
      statement,
      sign,
    } = req.body;

    // 1. Sprawdzenie kompletności danych
    if (
      !Number.isSafeInteger(merchantId) ||
      !Number.isSafeInteger(posId) ||
      !sessionId ||
      !Number.isSafeInteger(amount) ||
      !Number.isSafeInteger(originAmount) ||
      !currency ||
      !Number.isSafeInteger(orderId) ||
      !Number.isSafeInteger(methodId) ||
      typeof statement !== "string" ||
      typeof sign !== "string"
    ) {
      return res.status(400).json({ message: "Niekompletne lub nieprawidłowe dane notyfikacji P24" });
    }

    // 2. Sprawdzenie identyfikatora sklepu
    const expectedMerchantId = Number(process.env.P24_POS_ID);
    if (merchantId !== expectedMerchantId || posId !== expectedMerchantId) {
      return res.status(400).json({ message: "Nieprawidłowy identyfikator sklepu" })
    }

    // 3. Weryfikacja podpisu notyfikacji
    const expectedSign = generateP24Sign({
      merchantId,
      posId,
      sessionId,
      amount,
      originAmount,
      currency,
      orderId,
      methodId,
      statement,
    });

    if (expectedSign !== sign) {
      console.error("Nieprawidłowy podpis notyfikacji P24");
      return res.status(400).json({ message: "Nieprawidłowy podpis" });
    }

    // 4. Pobranie zamówienia z naszej bazy
    const orderResult = await pool.query(`
      SELECT id, total, payment_status, payment_order_id
      FROM orders
      WHERE payment_session_id = $1`,
      [sessionId]
    );

    if (orderResult.rows.length === 0) return res.status(404).json({ message: "Nie znaleziono zamówienia" });
    const order = orderResult.rows[0];

    // 5. Porównanie kwoty z zamówieniem
    const expectedAmount = Math.round(Number(order.total) * 100);
    if (
      !Number.isSafeInteger(expectedAmount) ||
      amount !== expectedAmount ||
      originAmount !== expectedAmount ||
      currency !== "PLN"
    ) {
      console.error("Niezgodność kwoty transakcji P24:", { sessionId, expectedAmount, amount, originAmount, currency });
      return res.status(400).json({ message: "Niezgodność danych płatności" });
    }

    // 6. Obsługa ponownej notyfikacji
    if (order.payment_status === "PAID") {
      if (Number(order.payment_order_id) === orderId) return res.status(200).json({ message: "Płatność została już potwierdzona" });
      return res.status(409).json({ message: "Zamówienie posiada inną potwierdzoną transakcję" });
    }

    // 7. Weryfikacja transakcji bezpośrednio w P24
    await verifyTransaction({ sessionId, orderId, amount, currency });

    // 8. Aktualizacja statusu płatności
    const updateResult = await pool.query(`
      UPDATE orders
      SET payment_status = 'PAID', payment_order_id = $1
      WHERE id = $2 AND payment_status IS DISTINCT FROM 'PAID'
      RETURNING id`,
      [orderId, order.id]
    );

    if (updateResult.rows.length === 0) {
      const currentOrder = await pool.query(`
        SELECT payment_status, payment_order_id
        FROM orders
        WHERE id = $1`,
        [order.id]
      );
      const current = currentOrder.rows[0];

      if (current?.payment_status === "PAID" && Number(current.payment_order_id) === orderId)
        { return res.status(200).json({ message: "Płatność została już potwierdzona" }) }
      return res.status(409).json({ message: "Nie udało się zaktualizować płatności" });
    }

    console.log("Płatność potwierdzona:", {
      orderId: order.id,
      paymentOrderId: orderId,
      sessionId,
      amount,
    });
    return res.status(200).json({ message: "Płatność potwierdzona" });
  } catch (error) {
    console.error(
      "Błąd webhooka P24:",
      error.response?.data || error.message
    );
    return res.status(500).json({ message: "Błąd obsługi notyfikacji P24" });
  }
});

module.exports = router;
