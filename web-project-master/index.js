var qr = require('qr-image'),
	express = require('express'),
	OAuth = require('oauthio'),
	middleware = require('./middleware'),
	app = express();

middleware(app);
OAuth.initialize('KEWL365dK7FzbXttgCD5eYh-wCk', 'jzWKfuIVfPVU3WStw6YlPiEbIpI');
app.use('/', express.static(__dirname + '/templates'));
app.use('/', express.static(__dirname + '/imgres'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
	console.log('Listening at ' + app.get('port'));
});
