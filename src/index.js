const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes")

const app = express();

//database connection
dbConnect();

// middlewares
app.use(express.json());
app.use("/api/auth",authRoutes);



// express server creation
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

