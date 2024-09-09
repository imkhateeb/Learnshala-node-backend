const { userRepository } = require("../repositories");

const getAllUsers = async (something) => {
  console.log(something);
  const users = await userRepository.getAllUsers();
  console.log(users);
  return users;
};
const getAllInstructors = async () => {
  return userRepository.getAllInstructors();
};
const getAllStudents = async () => {
  return userRepository.getAllStudents();
};

const userService = {
  getAllUsers,
  getAllInstructors,
  getAllStudents,
};

module.exports = userService;
