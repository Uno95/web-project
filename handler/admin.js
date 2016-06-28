var User = require('../models/user');
var	Kupon = require('../models/kupon');
var	Menu = require('../models/menu');

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

admin = function(req, res){
	res.render('./admin/admin.html',{username: req.user.adminname});
	console.log(req.user.adminname);
};

login = function(req, res){
	res.render('./admin/login.html');
};

addCoupon = function(req, res){
	User.find({}, function(err, menu) {
		if (err) {throw err};
		res.render('./admin/addCupon.html',{
			data: menu
		});
	})
};

addMenu = function(req, res){
	res.render('./admin/addMenu.html');
};

addingCoupon = function(req, res) {
	var newCoupon = new Kupon();

	newCoupon.idm				= req.body.nameCoupon;
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
        console.log(req.body.idName);
        res.redirect('/admin/add-coupon');
    });
}

addingMenu = function(req, res) {
	var newMenu = new Menu();
	var userMenuID = new User();

	newMenu.local.nama_Menu 	= req.body.nameCoupon;
	newMenu.local.harga_Menu	= req.body.price;
	newMenu.local.gambar 		= req.body.cuponsImg;
	newMenu.idc 				= req.body.idName;
	newMenu.local.namaCafe 		= req.body.cafeName;

	// save the new menu
    newMenu.save(function(err) {
        if (err){
            console.log('Error in Saving coupon: '+err);
            throw err;
        }

        console.log('menu succesful added!');
        console.log(req.body.idName);

    });

    //Get id from logged user
    User.findOne({'_id': req.body.idName}, function(err,getfrom){
    	if (err) {
    		console.log('Error in Saving coupon: '+err);
        	throw err;
    	}

    	//pushing menu ref into user
    	getfrom.admin.id_menu.push({
    		idc: newMenu._id,
    		nama_menu: newMenu.local.nama_Menu
    	});
	    getfrom.save(function(err){
        	if (err) {
        		console.log('Error in Saving coupon: '+err);
            	throw err;
        	}

        	/*newMenu.id*/
        	userMenuID.admin.id_menu = newMenu.id;
        	/*userMenuID.admin.id_menu += newMenu.id;*/
		    userMenuID.save(function(err){
	        	if (err) {
	        		console.log('Error in Saving coupon: '+err);
	            	throw err;
	        	}
	        	console.log(userMenuID.admin.id_menu);
	        });

        	/*console.log("sdfs " +  newMenu.id);*/

        });
    });

   	res.redirect('/admin/add-menu');

}

handler = {
	ubahPassword: ubahPassword,
	ubahProfil: ubahProfil,
	profil: profil,
	admin: admin,
	login: login,
	addCoupon: addCoupon,
	addMenu: addMenu,
	addingCoupon: addingCoupon,
	addingMenu: addingMenu
};

module.exports = handler;
