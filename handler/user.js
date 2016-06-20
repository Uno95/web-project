var handler, props;

//show landing page

ubahPassword = function(req, res){
	res.render('./user/ubahPassword.html');
};

ubahProfil = function(req, res){
	res.render('./user/ubahProfil.html');
};

profil = function(req, res){
	res.render('./user/profil.html');
};

comment = function(req, res){
	res.render('./user/comment.html');
};

admin = function(req, res){
	res.render('./user/admin.html');
};

home = function(req, res){
	res.render('./user/home.html');
};

//show form sign up for company
form = function(req, res){
	res.render('./user/form.html');
};

//show form sign up for user
formsign = function(req, res){
	res.render('./user/formsign.html');
};


//show form sign in for user
login = function(req, res){
	res.render('./user/login.html');
};

//registers success
berhasilregister = function(req, res){
	res.render('./user/registerberhasil.html');
};

//show search result page
hasilpencarian = function(req, res) {
	res.render('./user/hasilpencarian.html',
		{
			name: req.params.name
		}
	);
};

userpage = function (req, res) {
	res.render('./user/mainProfil.html',
		{
			name: req.params.username
		}
	);
};

placeDetail = function(req, res) {
	res.render('./user/placeDetail.html',
		{
			name: req.params.name,
			id: req.params.id
		}
	);
};

handler = {
	home: home,
	form: form,
	placeDetail: placeDetail,
    formsign: formsign,
    userpage: userpage,
    login: login,
    berhasilregister: berhasilregister,
    hasilpencarian: hasilpencarian
};

module.exports = handler;
