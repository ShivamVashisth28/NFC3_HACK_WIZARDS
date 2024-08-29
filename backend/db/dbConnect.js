import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to mongoDb');
    } catch (error) {
        console.log({error, message:"Error occured"})
    }
}

export default dbConnect