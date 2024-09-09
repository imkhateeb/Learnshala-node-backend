const ConflictError = require("../../errors/conflict.error");
const { courseRepository, reviewRepository } = require("../../repositories");

const reviewCourse = async (courseId, userId, reviewData) => {
  const review = await reviewRepository.getReviewByCourseAndStudent(
    courseId,
    userId
  );

  if (review) {
    throw new ConflictError("Review", {
      msg: "You have already reviewed this course",
    });
  }
  reviewData.course = courseId;
  reviewData.user = userId;
  const course = await courseRepository.reviewCourse(courseId, reviewData);
  return course;
};

module.exports = reviewCourse;
