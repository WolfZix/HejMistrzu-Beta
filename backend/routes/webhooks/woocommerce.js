const express = require("express");
const crypto = require("crypto");

const router = express.Router();
const { syncFullProduct } = require("../../services/syncProducts");

router.post("/", async (req, res) => {
  try {
    const signature = req.headers["x-wc-webhook-signature"];
    if (!signature) {
      console.log("WooCommerce: otrzymano ping weryfikacyjny webhooka");
      return res.status(200).json({
        success: true,
        message: "Webhook ping received"
      });
    }
    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.WC_WEBHOOK_SECRET
      )
      .update(req.rawBody)
      .digest("base64");
    const signatureBuffer = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expectedSignature);
    if (
      signatureBuffer.length !== expectedBuffer.length ||
      !crypto.timingSafeEqual(signatureBuffer, expectedBuffer)
    ) {
      return res.status(401).json({
        success: false,
        message: "Nieprawidłowy podpis webhooka"
      });
    }
    const productId = req.body.id;
    const parentId = req.body.parent_id;
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Brak ID produktu w webhooku"
      });
    }
    const syncId = parentId || productId;
    if (parentId) { console.log(`Webhook WooCommerce: wariant ${productId} → produkt ${parentId}`) }
    else { console.log(`Webhook WooCommerce: produkt ${productId}`) }

    await new Promise(resolve => setTimeout(resolve, 2000));
    await syncFullProduct(syncId);
    console.log(`✓ Webhook: zsynchronizowano produkt ${syncId}`);
    return res.status(200).json({
      success: true,
      message: `Produkt ${syncId} został zsynchronizowany`
    });
  } catch (error) {
    console.error(
      "Błąd webhooka:",
      error.response?.data || error.message
    );
    return res.status(500).json({
      success: false,
      message: "Nie udało się zsynchronizować produktu"
    });
  }
});

module.exports = router;