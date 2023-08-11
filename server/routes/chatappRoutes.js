const express = require("express");
const {
  register,
  login,
  profile,
} = require("../controllers/chatappController");

const router = express.Router();

router.get("/profile", profile);
router.post("/register", register);

router.post("/login", login);

module.exports = router;
