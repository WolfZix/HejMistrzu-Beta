const crypto = require("crypto");
const generateP24Sign = (data) => {
  const payload = { ...data, crc: process.env.P24_CRC };
  return crypto
    .createHash("sha384")
    .update(JSON.stringify(payload))
    .digest("hex");
};

module.exports = generateP24Sign;
