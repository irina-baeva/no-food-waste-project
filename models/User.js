const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    //login with email and password, unique - so only one person with the same email
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    //use gravatar package, so avatar pic is accesible, but we create an user 
    //to make profile is different step
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
// passing a Schema instance to mongoose.model
const User = mongoose.model('user', userSchema)
module.exports = User