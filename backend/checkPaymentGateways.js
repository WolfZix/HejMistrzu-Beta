require("dotenv").config();
const woocommerce = require("./config/wc");

async function checkPaymentGateways() {
  try {
    const response = await woocommerce.get("/payment_gateways");
    console.log(
      response.data.map((gateway) => ({
        id: gateway.id,
        title: gateway.title,
        method_title: gateway.method_title,
        enabled: gateway.enabled,
      }))
    );
  } catch (error) {
    console.error(
      "Błąd pobierania bramek:",
      error.response?.data || error.message
    );
  }
}
checkPaymentGateways();