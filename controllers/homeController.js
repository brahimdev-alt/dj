exports.getHome = (req, res) => {
    res.render('index', {
        title: "L'équipe de santé - Soins à domicile",
        activeNav: 'home'
    });
};

exports.getServices = (req, res) => {
    res.render('services', {
        title: 'Nos Services',
        activeNav: 'services'
    });
};