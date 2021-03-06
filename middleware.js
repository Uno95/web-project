var router = require('./router'),
	nunjucks = require('nunjucks'),
	middleware;

middleware = function(app, passport){
	router(app, passport);
	nunjucks.configure('templates',{
		autoescape: true,
		express: app
	});
};

module.exports = middleware;