// mongoose model
const Users = require("../model/users.model.cjs");

// to get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json("data not found", { message: error.message });
  }
};

// to get a single user
const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const singleUser = await Users.findOne({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(404).json("data not found", { message: error.message });
  }
};

// to create user
const createUsers = async (req, res) => {
  try {
    const newUsers = new Users({
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUsers.save();
    res.status(200).json(newUsers);
  } catch (error) {
    res.status(404).json("data not found", { message: error.message });
  }
};

// to update user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findOne({ _id: id });
    users.name = req.body.name;
    users.age = Number(req.body.age);
    await users.save();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("data not found", { message: error.message });
  }
};

// to delete user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await Users.deleteOne({ _id: id });
    res.status(200).json("user is deleted");
  } catch (error) {
    res.status(500).json("data not found", { message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
