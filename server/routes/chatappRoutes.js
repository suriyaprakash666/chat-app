const express = require("express");
const {
  register,
  login,
  logout,
  getProfile,
  getMessages,
  test,
  getPeople,
} = require("../controllers/chatAppController");

const router = express.Router();
router.get("/test", test);
router.get("/profile", getProfile);
router.get("/messages/:userId", getMessages);
router.get("/people", getPeople);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
