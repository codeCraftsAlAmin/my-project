const { getTodos, saveTodos } = require("../controllers/todo.controller.cjs");
const express = require("express");
const router = express.Router();

router.get("/", getTodos);
router.post("/", saveTodos);

module.exports = router;