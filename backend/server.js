const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/gallery",
  galleryRoutes
);

app.get("/", (req, res) => {

  res.json({

    message:
      "Pratham Panchal Family Hub API"

  });

});

const PORT =
  process.env.PORT || 5000;

async function startServer() {

  try {

    await connectDB();

    app.listen(PORT, () => {

      console.log(
        `🚀 Server running on ${PORT}`
      );

    });

  }

  catch (error) {

    console.log(error);

  }

}

startServer();