const User = require('../models/user')
const register = async (req,res)=>{
    try {
        const { name, email, password} = req.body;
        const newUser = new User({
          name,
          email,
          password,
        });
        await newUser.save();
        res.status(201).json("User added");
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}
const login = async (req,res)=>{
    try{
        const {email , password} = req.body;

    }catch(e){

    }
}

module.exports = {
    register,
    login
}