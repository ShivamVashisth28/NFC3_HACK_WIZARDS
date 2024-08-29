import { Router } from "express";
import { Shelter } from "../models/shelter.model.js";

const router = Router()

router.post('/add-shelter', async (req, res) => {
    const {
        name,
        shelterId,
        ownerUserName,
        location,
        contactEmail,
        contactPhone,
        opeartingHours,
        shelterServices,
        shetlerDetails,
        currentAnimals,
        capacity,
        charges

    } = req.body

    const shelterHome = await Shelter.create({
        name,
        shelterId,
        ownerUserName,
        location,
        contactEmail,
        contactPhone,
        opeartingHours,
        shelterServices,
        shetlerDetails,
        currentAnimals,
        capacity,
        charges
    })

    if(!shelterHome){
        return res.json({
            success: false,
            message:"Error in creating shelter home entity"
        })
    }

    await shelterHome.save()

    return res.json({
        success:true,
        message:"Shelter Home Entity Created"
    })
})

router.get('/all', async(req, res) => {
    const shelters = await Shelter.find();

    if(!shelters){
        return res.json({
            success: false,
            message:"No Sheleter found !!"
        })
    }

    return res.json({
        success: true,
        message:"Shelter Found",
        shelters
    })
})

router.get('/:shelterId', async (req, res) => {
    const shelterId = req.params.shelterId
    const shelter = await Shelter.find({
        shelterId
    })

    if(!shelter){
        return res.json({
            success:false,
            message:"Shelter with given Id not found"
        })
    }

    return res.json({
        success: true,
        message:"shelter with the given id found",
        shelter
    })
})

router.put('/:shelterId', async (req, res) => {
    const shelterId = req.params.shelterId
    const details = req.body

    // Find the pet by petId and update it
    const updatedShelter = await Shelter.findOneAndUpdate(
        { shelterId },
        { $set: details }, // Use $set to update only the provided fields
        { new: true, runValidators: true } // Return the updated pet and run validation
    )

    if(!updatedShelter){
        return res.json({
            success: false,
            message: "Shelter Not Found"
        })
    }

    return res.json({
        success: true,
        message: "Shelter Profile Updated Successfully",
        shelter: updatedShelter
    })
})


export default router