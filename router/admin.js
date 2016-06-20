var express = require('express'),
	r = express.Router(),
	h = require('../handler').admin,
	router;

router = function(app, passport){
	r.get('/admin', h.admin);
	r.get('/comment', h.comment);
	r.get('/profil', h.profil);
	r.get('/ubahProfil', h.ubahProfil);
	r.get('/ubahPassword', h.ubahPassword);

	app.use(r);
};
module.exports = router;

function isLoggedin(req,res,next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
}
