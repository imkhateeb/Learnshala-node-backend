const { courseRepository } = require("../../repositories");

const getTopCourses = async () => {
  const courses = await courseRepository.getCourses();
  console.log(courses);
};

module.exports = getTopCourses;
