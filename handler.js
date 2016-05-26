var handler, props;

// var props = {
// 	name : req.params.name
// }

home = function(req, res){
	res.render('home.html');
};
form = function(req, res){
	res.render('form.html');
};
formsign = function(req, res){
	res.render('formsign.html');
};

userpage = function (req, res) {
	res.render('user_page.html',{
			name: req.params.username
		}
	);
};

placeDetail = function(req, res) {
	res.render('placeDetail.html',
		{
			name: req.params.name,
			id: req.params.id
		}
	);
};

handler = {
	home: home,
	form: form,
	user: userpage,
	placeDetail: placeDetail,    
    formsign: formsign

};

module.exports = handler;
