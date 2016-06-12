var express = require('express'),
	r = express.Router(),
	h = require('./handler'),
	router;

router = function(app){
	r.get('/', h.home);
	r.get('/admin', h.admin);
	r.get('/form', h.form);
	r.get('/formsign', h.formsign);
	r.get('/login', h.login);
	r.get('/berhasilregister', h.berhasilregister);
	r.get('/hasilpencarian/:name', h.hasilpencarian);
	r.get('/place/:name/:id', h.placeDetail);
	r.get('/beranda/:username', h.userpage);
	app.use(r);
};
module.exports = router;