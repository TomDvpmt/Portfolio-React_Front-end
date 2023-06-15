const transporter = require("../config/mailing");

const sender = process.env.MAILING_ADDRESS;
const recipient = process.env.MY_EMAIL_ADDRESS;

const sendEmail = async (req, res) => {
    const userName = req.body.name;
    const userCompany = req.body.company;
    const userEmail = req.body.email;
    const userPhone = req.body.phone;
    const mailContent = req.body.content;

    transporter
        .sendMail({
            from: sender,
            to: recipient,
            replyTo: userEmail,
            subject: "Portfolio : message depuis le formulaire de contact",
            html: `
            <p><strong>Nom : </strong> ${userName}</p>
            <p><strong>Entreprise : </strong> ${userCompany}</p>
            <p><strong>Email : </strong> ${userEmail}</p>
            <p><strong>Téléphone : </strong> ${userPhone}</p>
            <p>${mailContent}</p>

            `,
        })
        .then((mailInfo) => {
            res.status(200).json({ message: "Message envoyé.", mailInfo });
        })
        .catch((error) => {
            console.error(error);
            res.status(400).json({
                message: "Impossible d'envoyer le message.",
                error,
            });
        });
};

module.exports = { sendEmail };
