const express = require('express');

const coursesRouter = require('./courses.router');
const userRouter = require('./user.router');
const evaluationStudentRouter = require('./evaluationStudent.router');
const teacherRouter = require('./teacher.router');
const teacherProgressRouter = require('./teacherProgres.router');
const scheduleRouter = require('./schedule.router');
const levelCourseRouter = require('./levelCourse.router');
const classRouter = require('./class.router');
const appBBRouter = require('./appBB.router');
const tareasRouter = require('./homeWork.router');


function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/courses', coursesRouter);
  router.use('/student', userRouter);
  router.use('/evaluation-student', evaluationStudentRouter);
  router.use('/teacher', teacherRouter);
  router.use('/teacher-progress', teacherProgressRouter);
  router.use('/schedule', scheduleRouter);
  router.use('/level-course', levelCourseRouter);
  router.use('/class-of-course', classRouter);
  router.use('/appBB-progress', appBBRouter);
  router.use('/myhome-work', tareasRouter);

}

module.exports = routerApi;
