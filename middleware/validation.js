exports.validateContact = (req, res, next) => {
    const { nom, prenom, email, telephone, dateRdv } = req.body;

    if (!nom || !prenom || !email || !telephone || !dateRdv) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email invalide' });
    }

    const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    if (!telRegex.test(telephone)) {
        return res.status(400).json({ error: 'Numéro de téléphone invalide' });
    }

    next();
};