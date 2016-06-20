var handler, props;

//show landing page

ubahPassword = function(req, res){
	res.render('./admin/ubahPassword.html');
};

ubahProfil = function(req, res){
	res.render('./admin/ubahProfil.html');
};

profil = function(req, res){
	res.render('./admin/profil.html');
};

comment = function(req, res){
	res.render('./admin/comment.html');
};

admin = function(req, res){
	res.render('./admin/admin.html');
};

handler = {
	ubahPassword: ubahPassword,
	ubahProfil: ubahProfil,
	profil: profil,
	comment:comment,
	admin: admin
};

module.exports = handler;
