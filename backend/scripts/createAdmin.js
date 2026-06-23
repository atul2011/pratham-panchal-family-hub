require("dotenv").config();

const mongoose=require("mongoose");

const bcrypt=require("bcryptjs");

const User=require("../models/User");

async function createAdmin(){

 await mongoose.connect(
  process.env.MONGO_URI
 );

 const hashed=await bcrypt.hash(
  "ChangeMe123",
  10
 );

 const exists=await User.findOne({
  username:"atuladmin"
 });

 if(exists){

  console.log(
   "Admin already exists"
  );

  process.exit();

 }

 await User.create({

  name:"Atul",

  username:"atuladmin",

  email:"admin@familyhub.local",

  password:hashed

 });

 console.log(
  "Admin created"
 );

 process.exit();

}

createAdmin();