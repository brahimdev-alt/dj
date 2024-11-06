require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

const app = express();

// Configuration
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connexion MongoDB réussie'))
    .catch(err => console.error('Erreur MongoDB:', err));

// Routes
app.use('/', homeRoutes);
app.use('/contact', contactRoutes);
app.use('/newsletter', newsletterRoutes);

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).render('404');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});