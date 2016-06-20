var	Kupon = require('../models/kupon');

var handler, props;

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

addCoupon = function(req, res){
	res.render('./admin/addCupon.html');
};

addingCoupon = function(req, res) {
	var newCoupon = new Kupon();

	newCoupon.local.namaMenu 	= req.body.nameCoupon;
	newCoupon.local.hargaMenu	= req.body.price;
	newCoupon.local.kadaluarsa	= req.body.exp;
	newCoupon.local.gambar 		= req.body.cuponsImg;
	newCoupon.local.persyaratan = req.body.cond;
	newCoupon.local.namaCafe 	= req.body.cafeName;
	newCoupon.local.couponLink 	= req.body.couponLink;

	// save the new coupon
    newCoupon.save(function(err) {
        if (err){
            console.log('Error in Saving coupon: '+err);
            throw err;
        }
        console.log('coupon succesful added!');
        res.redirect('/admin/add-coupon');
    });
}

handler = {
	ubahPassword: ubahPassword,
	ubahProfil: ubahProfil,
	profil: profil,
	comment:comment,
	admin: admin,
	addCoupon: addCoupon,
	addingCoupon: addingCoupon,
};

module.exports = handler;
