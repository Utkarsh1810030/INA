const mongoose = require('mongoose');
// Mongoose needs to know beforeHand what properties are we going to use in our documents
const {Schema} = mongoose;

// We can add any number of properties or remove any number of them at any point of time
const userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
})

mongoose.model('users', userSchema)