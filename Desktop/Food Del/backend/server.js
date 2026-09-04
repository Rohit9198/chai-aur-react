import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



//app config
const app = express();
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/", (req, res)=>{
    res.send("API WORKING")
})

app.listen(port,() =>{
    console.log(`sever started on http://localhost:${port}`)
})

//mongodb+srv://<db_username>:ZDJx64QdZTyAiq0j@cluster0.acvkayy.mongodb.net/?appName=Cluster0