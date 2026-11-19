const p24 = require("../config/p24");
const generateP24Sign = require("../utils/p24Sign");
const registerTransaction = async ({ sessionId, amount, email, description, urlReturn, urlStatus, client }) => {
  const merchantId = Number(process.env.P24_POS_ID);
  const posId = merchantId;

  if (!merchantId || !process.env.P24_API_KEY || !process.env.P24_CRC) throw new Error("Brak konfiguracji Przelewy24 w .env");
  if (!Number.isSafeInteger(amount) || amount <= 0) throw new Error("Nieprawidłowa kwota transakcji");
  const currency = "PLN";

  // Podpis dla rejestracji transakcji.
  // Kolejność i typy pól muszą być zgodne z dokumentacją P24.
  const sign = generateP24Sign({ sessionId, merchantId, amount, currency });
  const payload = { merchantId, posId, sessionId, amount, currency, description,  email, country: "PL", language: "pl", urlReturn, urlStatus, sign };

  if (client) payload.client = client;

  const response = await p24.post("/transaction/register", payload);
  const token = response.data?.data?.token;

  if (!token) throw new Error("Przelewy24 nie zwróciło tokenu transakcji");
  const paymentBaseUrl = p24.defaults.baseURL.replace("/api/v1", "");

  return { token, paymentUrl: `${paymentBaseUrl}/trnRequest/${token}` };
};

module.exports = {
  registerTransaction,
};
