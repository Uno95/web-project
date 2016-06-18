var qr 			= require('qr-image'),
	express 	= require('express'),
	app 		= express(),
	middleware 	= require('./middleware'),

	mongoose 	= require('mongoose'),
	passport 	= require('passport'),
	flash 		= require('connect-flash'),
	
	dbConfig 		= require('db.js'),
	morgan       	= require('morgan'),
	cookieParser 	= require('cookie-parser'),
	bodyParser   	= require('body-parser'),
	expressSession 	= require('express-session');

// configuration ===============================================================
mongoose.connect(dbConfig.url);
require('./passport/init')(passport);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// required for passport
app.use(expressSession({ 
	secret: 'dcoupsplacewhereyougetcupons',
    resave: true,
    saveUninitialized: true 
})); // session secret


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

middleware(app, passport);

app.use('/', express.static(__dirname + '/templates'));
app.use('/', express.static(__dirname + '/imgres'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
	console.log('Listening at ' + app.get('port'));
});
