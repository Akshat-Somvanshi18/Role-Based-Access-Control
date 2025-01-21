const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const register = async(req,res)=>{
    try {
        const {username, name, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({username, name, password, password: hashedPassword, role: role});
        newUser.save();
        return res.status(201).json({message:`New user with username: ${username} is created successfully`});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something went wrong"});
    }
}

const login = async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username:username});
        if(!user)
        {
            return res.status(404).json({message:`User with username: ${username} not found`});
        }
        
        const compareResult = await bcrypt.compare(password,user.password);
        if(!compareResult)
        {
            return res.status(400).json({message:`Invalid credentials`});
        }

        return res.status(200).json({message:`User with username: ${username} logged in successfully`});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something went wrong"});   
    }

}

module.exports = {
    register,
    login
};