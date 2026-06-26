const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await transporter.sendMail({
  from: process.env.MAIL_USER,
  to: process.env.MAIL_USER,
  replyTo: email,
  subject: `📩 ${subject}`,
  html: `
    <div style="
      background:#0f1115;
      padding:40px;
      font-family:Arial,sans-serif;
      color:#f5f5f5;
    ">
      <div style="
        max-width:700px;
        margin:auto;
        background:#181b22;
        border:1px solid #2b2f38;
        border-radius:16px;
        overflow:hidden;
      ">

        <div style="
          background:#c79b3b;
          padding:24px;
          text-align:center;
        ">
          <h1 style="
            margin:0;
            color:#111;
            font-size:28px;
          ">
            🎲 Hej Mistrzu
          </h1>

          <p style="
            margin-top:8px;
            color:#222;
          ">
            Nowa wiadomość z formularza kontaktowego
          </p>
        </div>

        <div style="padding:30px;">

          <table style="
            width:100%;
            border-collapse:collapse;
            margin-bottom:30px;
          ">
            <tr>
              <td style="padding:12px 0;color:#999;width:120px;">
                Imię
              </td>

              <td style="padding:12px 0;font-weight:bold;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#999;">
                Email
              </td>

              <td style="padding:12px 0;">
                <a
                  href="mailto:${email}"
                  style="
                    color:#c79b3b;
                    text-decoration:none;
                  "
                >
                  ${email}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0;color:#999;">
                Temat
              </td>

              <td style="padding:12px 0;">
                ${subject}
              </td>
            </tr>
          </table>

          <h2 style="
            margin-bottom:12px;
            color:#c79b3b;
            font-size:20px;
          ">
            Treść wiadomości
          </h2>

          <div style="
            background:#101216;
            border:1px solid #2b2f38;
            border-radius:12px;
            padding:20px;
            line-height:1.7;
            white-space:pre-wrap;
          ">
            ${message}
          </div>

        </div>

        <div style="
          padding:20px;
          text-align:center;
          color:#777;
          font-size:13px;
          border-top:1px solid #2b2f38;
        ">
          Wiadomość została wysłana z formularza kontaktowego strony
          <br>
          <strong>Hej Mistrzu</strong>
        </div>

      </div>
    </div>
    `,
  });

    res.json({
      success: true,
      message: "Mail wysłany",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Nie udało się wysłać maila",
    });
  }
});

module.exports = router;