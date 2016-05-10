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

	placeDetail: placeDetail

};

module.exports = handler;
