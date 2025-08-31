import express from "express"
import "dotenv/config"
import authRoutes from "./routes/auth.routes.js"

const app = express()
const PORT = process.env.PORT



app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
}) 

//basic