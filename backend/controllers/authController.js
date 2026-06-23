const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.login = async (req,res)=>{

 try{

  const {username,password}=req.body;

  const user=await User.findOne({
   username
  });

  if(!user){

   return res.status(401).json({
    message:"Invalid credentials"
   });

  }

  const valid=await bcrypt.compare(
   password,
   user.password
  );

  if(!valid){

   return res.status(401).json({
    message:"Invalid credentials"
   });

  }

  const token=jwt.sign(

   {
    id:user._id
   },

   process.env.JWT_SECRET,

   {
    expiresIn:"7d"
   }

  );

  res.json({

   token,

   username:user.username

  });

 }

 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

}