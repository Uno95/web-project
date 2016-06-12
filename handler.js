var handler, props;

//show landing page
home = function(req, res){
	res.render('home.html');
};

//show form sign up for company
form = function(req, res){
	res.render('form.html');
};

//show form sign up for user
formsign = function(req, res){
	res.render('formsign.html');
};


//show form sign in for user
login = function(req, res){
	res.render('login.html');
};

//registers success
berhasilregister = function(req, res){
	res.render('registerberhasil.html');
};

//show search result page
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
	form: form,
	placeDetail: placeDetail,
    formsign: formsign,
    userpage: userpage,
    login: login,
    berhasilregister: berhasilregister,
    hasilpencarian: hasilpencarian
};

module.exports = handler;
