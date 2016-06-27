// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local: {
        nama_Menu      : String,
        harga_Menu     : String,
        gambar        : String,
<<<<<<< HEAD
        namaCafe      : String,
        cafes         : {
            id_cafes   : [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
        },
=======
        nama_Cafe      : String,
>>>>>>> ecb237c01019a5cfcd9e6af3780d3a18a764e654
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Menu', userSchema);
