// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local: {
        namaMenu      : String,
        hargaMenu     : String,
        gambar        : String,
        namaCafe      : String,
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Menu', userSchema);
