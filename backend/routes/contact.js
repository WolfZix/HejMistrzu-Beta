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
          background:#181b22;
          padding:32px;
          text-align:center;
          border-bottom:1px solid #2b2f38;
        ">

          <img
            src="https://hejmistrzu.netlify.app/logo.webp"
            alt="Hej Mistrzu"
            style="
              width:60px;
              height:auto;
              display:block;
              margin:0 auto 16px auto;
            "
          />

          <h1 style="
            margin:0;
            color:hsl(43, 78%, 46%);
            font-size:26px;
            font-weight:bold;
          ">
            Hej Mistrzu!
          </h1>

          <p style="
            margin:12px 0 0 0;
            color:#b8b8b8;
            font-size:15px;
          ">
            Formularz kontaktowy • Hej Mistrzu
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
            <tr>
              <td style="padding:12px 0;color:#999;">
                Wysłano
              </td>

              <td style="padding:12px 0;">
                ${new Date().toLocaleString("pl-PL")}
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