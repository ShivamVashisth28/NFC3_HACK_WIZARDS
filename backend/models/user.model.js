import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true,
        unique: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password :{
        type: String,
        required: true,
        unique: true,
    },

    avatar :{
        type: String,
    },

    pets: {
        type: [String],
        default: []
    }

})

export const User = mongoose.model('User', userSchema)