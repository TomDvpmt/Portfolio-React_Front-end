const nodemailer = require("nodemailer");

const sender = process.env.MAILING_ADDRESS;
const password = process.env.MAILING_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    auth: {
        user: sender,
        pass: password,
    },
});

module.exports = transporter;
