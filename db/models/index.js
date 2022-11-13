const { Student, studentSchema } = require('./student.models');
const { Teacher, teacherSchema } = require('./teacher.models');
const { AppBB, appBBSchema } = require('./appBB.models');
const { ClassOfCourse, classOfCourseSchema } = require('./class.models');
const { EvaluationStudent, evaluationStudentSchema } = require('./evaluationStudent.models');
const { HomeWork, homeWorkSchema } = require('./homeWork.models');
const { LevelCourse, levelCourseSchema } = require('./levelCourse.models');
const { Schedule, scheduleSchema } = require('./schedule.models');
const { TeacherProgress, teacherProgressSchema } = require('./teacherProgress.models');
const { Courses, coursesSchema } = require('./courses.models');
// const {  } = require('.');

function setupModels(sequelize){
  Student.init(studentSchema, Student.config(sequelize));
  Teacher.init(teacherSchema, Teacher.config(sequelize));
  AppBB.init(appBBSchema, AppBB.config(sequelize));
  ClassOfCourse.init(classOfCourseSchema, ClassOfCourse.config(sequelize));
  EvaluationStudent.init(evaluationStudentSchema, EvaluationStudent.config(sequelize));
  HomeWork.init(homeWorkSchema, HomeWork.config(sequelize));
  LevelCourse.init(levelCourseSchema, LevelCourse.config(sequelize));
  Schedule.init(scheduleSchema, Schedule.config(sequelize));
  TeacherProgress.init(teacherProgressSchema, TeacherProgress.config(sequelize));
  Courses.init(coursesSchema, Courses.config(sequelize));
  // .init(, .config(sequelize));

}

module.exports = setupModels;
