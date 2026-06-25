const Gallery=require(
 "../models/Gallery"
);

exports.upload = async (req, res) => {
  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const item = await Gallery.create({
      title: req.body.title,
      imageUrl: req.file.filename,
    });

    console.log("SAVED:", item);

    res.json(item);

  } catch (error) {

    console.error("UPLOAD ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAll = async (req, res) => {
  try {

    const data = await Gallery.find()
      .sort({ createdAt: -1 });

    res.json(data);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};