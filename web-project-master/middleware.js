var router = require('./routes'),
	nunjucks = require('nunjucks'),
	middleware;

middleware = function(app){
	router(app);
	nunjucks.configure('templates',{
		autoescape: true,
		express: app
	});
};

module.exports = middleware;