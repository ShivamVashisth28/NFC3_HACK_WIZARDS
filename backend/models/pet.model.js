import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    petId:{
        type: String,
        required:true,
        unique: true,
    },
    ownerUserName :{
        type : String,
        required: true
    },
    species : {
        type:String,
        required: true
    },
    breed : {
        type:String,
        required: true
    },
    age : {
        type:Number,
        required: true
    },
    size :{
        type: String,
        required: true
    },
    color : {
        type:String,
        required: true
    },
    photos :{
        type: [String],
        default: []
    },
    healthInfo : {
        type:{},
        
    },
    behaviourInfo : {
        type:{},
        
    },
    adoptionInfo : {
        type:{},
        
    },
    contactInfo : {
        type:{},
    },
    petStory :{
        type: String
    }

})

export const Pet = mongoose.model('Pet', petSchema)