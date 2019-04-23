var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model('User', userSchema);