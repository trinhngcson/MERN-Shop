const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
} = require("../controller/userCtrl");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id", getaUser);

module.exports = router;
