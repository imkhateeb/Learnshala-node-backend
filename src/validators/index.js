const adminValidator = require("./admin.validator");
const studentValidator = require("./student.validator");
const instructorValidator = require("./instructor.validator");

const validator = {
  adminValidator,
  studentValidator,
  instructorValidator,
};

module.exports = validator;
