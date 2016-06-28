// load the things we need
var mongoose = require('mongoose');

var idMenu = mongoose.Schema({
    idm : String
});

var userSchema = mongoose.Schema({

    local: {
        id_menu       : [idMenu],
        namaMenu      : String,
        hargaMenu     : String,
        kadaluarsa    : String,
        gambar        : String,
        persyaratan   : String,
        namaCafe      : String,
        couponLink    : String
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Kupon', userSchema);
