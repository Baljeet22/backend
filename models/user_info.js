require('dotenv').config()//Getting .env variables
const mongoose = require('mongoose')


////////////User Schema////////////////
const users = new mongoose.Schema({
    fname: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true

    },
    lname: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        unique: true,
        minlength: 3,
        maxlength: 20,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true
    },
    phone: {
        type: Number,
        minlength: 6,
        maxlength: 20

    },
    profilemaketime: {
        type: String,
        default: Date.now

    },
    sex: {
        type: String,
        enum: ['Male', 'Female', 'Neutral', 'Genderless','Unknown'],
        default:'Unknown'
    }
})
////////End- User Schema/////////

module.exports = mongoose.model(process.env.DB_COLLECTION_1, users) 
