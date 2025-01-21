const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json());

dbConnect();

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

