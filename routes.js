var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app, passport){
	r.get('/', h.home);
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

	app.use(r);
};
module.exports = router;