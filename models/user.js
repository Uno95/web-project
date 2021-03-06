// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');


var idMenuSchema = mongoose.Schema({
    idc : String,
    nama_menu: String
});

// define the schema for our user model
var userSchema = mongoose.Schema({
    admin: {
        email         : String,
        password      : String,
        companyname   : String,
        id_menu       : [idMenuSchema],
        address       : String,
        adminname     : String,
        nomorhp       : String,
        keterangan    : String,
        lat           : String,
        lng           : String,
    }
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
userSchema.methods.adminvalidPassword = function(password) {
    return bcrypt.compareSync(password, this.admin.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
