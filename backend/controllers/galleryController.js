const Gallery=require(
 "../models/Gallery"
);

exports.upload=async(
 req,
 res
)=>{

 try{

  const item=await Gallery.create({

   title:req.body.title,

   imageUrl:req.file.filename

  });

  res.json(item);

 }

 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

exports.getAll=async(
 req,
 res
)=>{

 const data=

 await Gallery.find()

 .sort({
  createdAt:-1
 });

 res.json(data);

};