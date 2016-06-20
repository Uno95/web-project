var express = require('express'),
	r = express.Router(),
	h = require('../handler').admin,
	router;

router = function(app, passport){
	r.get('/admin', h.admin);
	r.get('/admin/comment', h.comment);
	r.get('/admin/profil', h.profil);
	r.get('/admin/ubahProfil', h.ubahProfil);
	r.get('/admin/ubahPassword', h.ubahPassword);
	r.get('/admin/add-coupon', h.addCoupon);
	r.get('/admin/add-menu', h.addMenu);
	r.post('/admin/adding-coupon', h.addingCoupon);
	r.post('/admin/adding-menu', h.addingMenu);

	app.use(r);
};
module.exports = router;

function isLoggedin(req,res,next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
}
