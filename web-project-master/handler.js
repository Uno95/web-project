var handler, props;

home = function(req, res){
	res.render('home.html');
};
admin = function(req, res){
	res.render('admin.html');
};
form = function(req, res){
	res.render('form.html');
};
formsign = function(req, res){
	res.render('formsign.html');
};
login = function(req, res){
	res.render('login.html');
};
berhasilregister = function(req, res){
	res.render('registerberhasil.html');
};

hasilpencarian = function(req, res) {
	res.render('hasilpencarian.html',
		{
			name: req.params.name
		}
	);
};

userpage = function (req, res) {
	res.render('userpage.html',
		{
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
	admin: admin,
	form: form,
	placeDetail: placeDetail,
    formsign: formsign,
    userpage: userpage,
    login: login,
    berhasilregister: berhasilregister,
    hasilpencarian: hasilpencarian
};

module.exports = handler;
