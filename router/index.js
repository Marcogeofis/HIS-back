const express = require('express');
const coursesRouter = require('./courses.router');
const userRouter = require('./user.router');
const teacherRouter = require('./teacher.router');
const scheduleRouter = require('./schedule.router');
const levelCourseRouter = require('./levelCourse.router');
const evaluationStudentRouter = require('./evaluationStudent.router.js')

function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/courses', coursesRouter);
  router.use('/user', userRouter);
  router.use('/teacher', teacherRouter);
  router.use('/schedule', scheduleRouter);
  router.use('/levelCourse', levelCourseRouter);
  router.use('/evaluation-student', evaluationStudentRouter);
}

module.exports = routerApi;
