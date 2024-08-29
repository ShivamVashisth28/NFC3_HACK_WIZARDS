import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import userRouter from './routes/user.route.js'
import shelterRouter from './routes/shelter.route.js'
import petRouter from './routes/pet.route.js'
import dbConnect from './db/dbConnect.js'

const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.json({limit:"16kb"}))

dbConnect()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/pets', petRouter)
app.use('/api/v1/shelters', shelterRouter)


app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})