const express = require("express");

const router = express.Router();

const auth = require(
  "../middleware/authMiddleware"
);

router.get(
  "/dashboard",
  auth,
  (req, res) => {

    res.json({
      message:
        "Welcome Admin",
      user: req.user,
    });

  }
);

module.exports = router;