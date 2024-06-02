const User = require("../models/user_model.js")
const bcrypt = require("bcryptjs")



const home = async(req,res) =>{
    try {
        res.status(200).send("Welcome to home page")

    } catch (error) {
        console.log(error);
    }
}


const register = async(req,res) =>{
    try {
        const {username,email,phone,password} = req.body
        
        const userExist = await User.findOne({email})

        if (userExist) {
            return res.status(400).json({msg:"User alreasy exist with this email"})
        }

        const usercreated =  await User.create({username,email,phone,password})

        res.status(200).json({ 
            msg:"User Register" , 
            token: await usercreated.gentoken(),
            userId: usercreated._id.toString()
        })

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")

    }
}


const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        
        const userExist = await User.findOne({email})
        
        if (!userExist) {
            res.status(400).json({msg:"Invalid credentials"})
        }

        const user = userExist.comparePass(password)

        if(user){
            res.status(200).json({ 
                msg:"Logged In" , 
                token: await userExist.gentoken(),
                userId: userExist._id.toString()
            })
        }else{
            res.status(400).json({msg:"Invalid credentials"})
        }



    } catch (error) {
        console.log(error);

        res.status(500).json("Internal Server Error")
    }
}

const user =  async(req,res) =>{
    try {
        const userData = req.user
        // console.log(userData);
        return res.status(200).json({userData}) 
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {home,register,login,user}