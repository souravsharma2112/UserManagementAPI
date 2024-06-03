require("dotenv").config();
const express = require('express')
const app = express();
const router = require("./router/auth-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

app.use(express.json())
app.use("/api/auth" , router)
app.use(errorMiddleware)

connectDB().then(()=>{
    app.listen(5000 , ()=>{
        console.log("Server is running");
    })
})
