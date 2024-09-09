const addSyllabusToCourse = require("./course/addSyllabusToCourse");
const createCourse = require("./course/createCourse");
const enrollCourse = require("./course/enrollCourse");
const getCourseByCourseId = require("./course/getCourseByCourseId");
const getCourses = require("./course/getCourses");
const likeOrUnlikeCourse = require("./course/likeOrUnlikeCoures");
const markCourseAsCompleted = require("./course/markCourseAsCompleted");
const reviewCourse = require("./course/reviewCourse");
const updateCourse = require("./course/updateCourse");
const markSyllabusAsCompleted = require("./course/markSyllabusAsCompleted")

const courseService = {
  getCourses,
  createCourse,
  updateCourse,
  enrollCourse,
  likeOrUnlikeCourse,
  reviewCourse,
  getCourseByCourseId,
  markCourseAsCompleted,
  addSyllabusToCourse,
  markSyllabusAsCompleted
};

module.exports = courseService;
