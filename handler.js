var handler;

home = function(req, res){
	res.render('home.html');
};
form = function(req, res){
	res.render('form.html');
};


handler = {
	home: home,
	form: form
};

module.exports = handler;
