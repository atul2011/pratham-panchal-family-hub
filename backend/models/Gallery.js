const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(

{

 title:{
  type:String,
  required:true
 },

 imageUrl:{
  type:String,
  required:true
 },

 category:{
  type:String,
  default:"family"
 }

},

{
 timestamps:true
}

);

module.exports = mongoose.model(
 "Gallery",
 GallerySchema
);