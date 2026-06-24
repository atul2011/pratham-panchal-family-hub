const express=require(
 "express"
);

const router=

 express.Router();

const upload=require(

 "../config/multer"

);

const gallery=require(

 "../controllers/galleryController"

);

router.get(
 "/",
 gallery.getAll
);

router.post(

 "/",

 upload.single("image"),

 gallery.upload

);

module.exports=router;