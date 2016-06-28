var express = require('express'),
	r = express.Router(),
	h = require('../handler').admin,
	router;

router = function(app, passport){
	r.get('/admin', isLoggedin, h.admin);
	r.get('/admin/login', h.login);
	r.get('/admin/profil', h.profil);
	r.get('/admin/ubahProfil', h.ubahProfil);
	r.get('/admin/ubahPassword', h.ubahPassword);
	r.get('/admin/add-coupon', isLoggedin, h.addCoupon);
	r.get('/admin/add-menu', isLoggedin, h.addMenu);
	r.post('/admin/adding-coupon', h.addingCoupon);
	r.post('/admin/adding-menu', isLoggedin, h.addingMenu);

	r.post('/doAdminLogin',passport.authenticate('admin-login', {
	    successRedirect : '/admin', // redirect to the secure profile section
	    failureRedirect : '/admin/login', // redirect back to the signup page if there is an error
	    failureFlash : true // allow flash messages
	}));

	// LOGOUT ==============================
    app.get('/admin/logout', function(req, res) {
        req.logout();
        res.redirect('/admin');
    });

	app.use(r);
};
module.exports = router;

function isLoggedin(req,res,next){

	res.locals.login = req.isAuthenticated();
	if(res.locals.login){
		res.locals.user = req.user;
		return next();
	}
	res.redirect('/admin/login');
}
