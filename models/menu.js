// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local: {
        nama_Menu      : String,
        harga_Menu     : String,
        gambar        : String,
        namaCafe      : String,
        cafes         : {
            id_cafes   : [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
        }
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Menu', userSchema);
