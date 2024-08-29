import mongoose from "mongoose";

const shelterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    shelterId: {
        type: String,
        required: true,
        unique: true
    },
    ownerUserName: {
        type: String,
        required: true
    },
    location :{
        type: String,
        required: true
    },
    contactEmail :{
        type: String,
        required: true
    },
    contactPhone :{
        type: String,
        required: true
    },
    operatingHours: {
        type: String,
        required: true
    },
    shelterServices: {
        type: [String],
        required: true
    },
    shelterDetails:{
        type: String,
        required: true
    },
    currentAnimals:{
        type: [String],
        required: true,
        default: []
    },
    capacity :{
        type: Number,
    },
    charges :{
        type: {},
        required: true
    }
})

export const Shelter = mongoose.model('Shelter', shelterSchema)