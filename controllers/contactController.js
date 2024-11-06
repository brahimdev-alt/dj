const Contact = require('../models/Contact');
const mailer = require('../config/mailer');

exports.submitContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();

        // Envoi d'email de confirmation
        await mailer.sendConfirmation(contact);

        res.redirect('/?success=true#contact');
    } catch (error) {
        console.error('Erreur contact:', error);
        res.redirect('/?error=true#contact');
    }
};