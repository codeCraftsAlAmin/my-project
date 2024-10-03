const express = require("express");
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
  updateUsers,
} = require("../controller/users.controller.cjs");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/", createUsers);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUsers);

module.exports = router;
