const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendConfirmation = async (contact) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: contact.email,
        subject: 'Confirmation de votre demande de rendez-vous',
        html: `
            <h1>Merci de nous avoir contacté</h1>
            <p>Nous avons bien reçu votre demande de rendez-vous pour le ${new Date(contact.dateRdv).toLocaleDateString()}.</p>
            <p>Nous vous contacterons rapidement pour confirmer le rendez-vous.</p>
        `
    };

    await transporter.sendMail(mailOptions);
};