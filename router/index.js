var admin = require('./admin'),
	user = require('./user');

var router = function(app, passport){
	admin(app, passport);
	user(app, passport);
};

module.exports = router;