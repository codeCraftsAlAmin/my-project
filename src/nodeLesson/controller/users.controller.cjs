const Users = require("../model/users.model.cjs");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(201).json(allUsers);
  } catch (error) {
    res.status(404).send("data not found");
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const onseUsers = await Users.findOne({ _id: id });
    res.status(201).json(onseUsers);
  } catch (error) {
    res.status(404).send("data not found");
  }
};

const createUsers = async (req, res) => {
  try {
    const newUsers = new Users({
      name: req.body.name,
      age: Number(req.body.age),
      occupation: req.body.occupation,
    });
    await newUsers.save();
    res.status(201).json(newUsers);
  } catch (error) {
    res.status(404).send("data not found");
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await Users.deleteOne({ _id: id });
    res.status(201).json("data is deleted");
  } catch (error) {
    res.status(404).send("data not found");
  }
};

const updateUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findOne({ _id: id });
    users.name = req.body.name;
    users.age = Number(req.body.age);
    users.occupation = req.body.occupation;
    await users.save();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send("data not found");
  }
};

module.exports = {
  getAllUsers,
  createUsers,
  getSingleUser,
  deleteUser,
  updateUsers,
};
