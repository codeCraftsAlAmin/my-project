const express = require("express");
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controller/users.controller.cjs");
const router = express.Router();

// crud operations
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/", createUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
