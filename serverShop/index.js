import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import postRouter from "./routers/postRouter.js";
import authRouter from "./routers/authRouter.js";

const PORT = process.env.PORT || 5000
const DB_URL = `mongodb+srv://Tony:1256Av798@cluster0.ylscccj.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', postRouter)
app.use('/auth', authRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT' + PORT) )
    } catch (e) {
        console.log(e)
    }
}

startApp()