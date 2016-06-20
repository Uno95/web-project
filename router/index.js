var admin = require('./admin'),
	user = require('./user');

var router = function(app, passport){
	admin(app);
	user(app, passport);
};

module.exports = router;