const User = require("../models/user.model");

const getAllUsers = async () => {
  const users = await User.find({});
  console.log(users);
  return users;
};
const getAllInstructors = () => {
  return User.find({ role: "instructor" });
};
const getAllStudents = () => {
  return User.find({ role: "student" });
};

const userRepository = {
  getAllUsers,
  getAllInstructors,
  getAllStudents,
};

module.exports = userRepository;
