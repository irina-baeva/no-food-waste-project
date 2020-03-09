const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    //now we want to create reference to user model, cuz every profile should be assootioted with user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    location:{
        type: String
    },
    bio:{
        type: String
    },
    position:{
        type: String
    },
    //to try to get api 
    githubusername:{
        type: String
    },
    social: {
        linkedin:{
            type: String
        },
        twitter:{
            type: String
        },
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
//module.exports= Profile = mongoose.model('profile', profileSchema )
const Profile = mongoose.model('profile', ProfileSchema)
module.exports = Profile