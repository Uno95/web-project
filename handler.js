var handler;

home = function(req, res){
	res.render('home.html');
};


handler = {
	home: home
};

module.exports = handler;