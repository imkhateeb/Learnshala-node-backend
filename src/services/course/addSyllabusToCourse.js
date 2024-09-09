const { courseRepository } = require("../../repositories");

const addSyllabusToCourse = async (courseId, syllabusData) => {
  syllabusData.course = courseId;
  const course = await courseRepository.addSyllabusToCourse(
    courseId,
    syllabusData
  );
  return course;
};
module.exports = addSyllabusToCourse;
