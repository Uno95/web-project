var admin = require('./admin'),
	user = require('./user'),
	handler;

handler = {
	admin: admin,
	user: user
};

module.exports = handler;