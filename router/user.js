var express = require('express'),
	r = express.Router(),
	h = require('../handler').user,
	router;

router = function(app, passport){
	r.get('/', h.home);
	r.get('/userpage/:name', isLoggedin, h.userpage);
	r.get('/form', h.form);
	r.get('/formsign', h.formsign);
	r.get('/login', h.login);
	r.get('/berhasilregister', h.berhasilregister);
	r.get('/hasilpencarian/:name', h.hasilpencarian);
	r.get('/place/:name/:id', h.placeDetail);
	r.get('/beranda/:username', h.userpage);

	r.post('/newuser',passport.authenticate('local-signup', {
	    successRedirect : '/userpage', // redirect to the secure profile section
	    failureRedirect : '/formsign', // redirect back to the signup page if there is an error
	    failureFlash : true // allow flash messages
	}));

	r.post('/loginp',passport.authenticate('local-login', {
	    successRedirect : '/userpage', // redirect to the secure profile section
	    failureRedirect : '/login', // redirect back to the signup page if there is an error
	    failureFlash : true // allow flash messages
	}));

	app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

	app.use(r);
};
module.exports = router;


function isLoggedin(req,res,next){
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
}
