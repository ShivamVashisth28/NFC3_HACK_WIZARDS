import { Router } from "express";
import { Pet } from "../models/pet.model.js";

const router = Router()

router.post('/add-pet', async (req, res) => {
    const { name, petId, ownerUserName, species, breed, age, size,
            color, photos, healthInfo, behaviourInfo, adoptionInfo, 
            contactInfo, petStory} = req.body
    
    const pet = await Pet.create({
        name, 
        petId, 
        ownerUserName, 
        species, 
        breed, 
        age, 
        size,
        color, 
        photos, 
        healthInfo, 
        behaviourInfo, 
        adoptionInfo, 
        contactInfo, 
        petStory
    })

    if(!pet){
        return res.json({success:false, message:"Failed in creating pet profile"})
    }

    await pet.save();

    return res.json({success: true, message:"Pet Profile Creatinon Success"})
})

router.get('/all', async(req, res) => {
    const pets = await Pet.find()

    if(!pets){
        return res.json({
            success: false,
            message:"Pets not Found!!"
        })
    }

    return res.json({
        success: true,
        message:"Pets found",
        pets
    });
})

router.get('/:petId', async (req, res) => {
    const petId = req.params.petId
    const pet = await Pet.find({
        petId
    })

    if(!pet){
        return res.json({
            success:false,
            message:"Pet with given Id not found"
        })
    }

    return res.json({
        success: true,
        message:"pet with the given id found",
        pet
    })
})

router.put('/:petId', async (req, res) => {
    const petId = req.params.petId
    const details = req.body

    // Find the pet by petId and update it
    const updatedPet = await Pet.findOneAndUpdate(
        { petId },
        { $set: details }, // Use $set to update only the provided fields
        { new: true, runValidators: true } // Return the updated pet and run validation
    )

    if(!updatedPet){
        return res.json({
            success: false,
            message: "Pet Not Found"
        })
    }

    return res.json({
        success: true,
        message: "Pet Profile Updated Successfully",
        pet: updatedPet
    })
})


export default router