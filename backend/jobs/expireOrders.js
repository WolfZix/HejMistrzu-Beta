const pool = require("../config/db");

const expireOrders = async () => {
  try {
    const result = await pool.query(`
      UPDATE orders
      SET status = 'CANCELED'
      WHERE status = 'PENDING'
        AND expires_at <= NOW()
      RETURNING id
    `);

    if (result.rows.length > 0) {
      console.log(
        "Anulowano wygasłe zamówienia:",
        result.rows.map((order) => order.id)
      );
    }
  } catch (error) {
    console.error("Błąd podczas anulowania wygasłych zamówień:", error);
  }
};

module.exports = expireOrders;