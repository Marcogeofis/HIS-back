const express = require('express');
const coursesRouter = require('./courses.router');
const userRouter = require('./user.router');
const teacherRouter = require('./teacher.router');
const scheduleRouter= require('./schedule.router');
const periodRouter= require('./period.router');
const studentEvaluationRouter= require('./studentEvaluation.router');


function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/courses', coursesRouter);
  router.use('/user', userRouter);
  router.use('/teacher', teacherRouter);
  router.use('/schedule', scheduleRouter);
  router.use('/period', periodRouter);
  router.use('/student-evaluation', studentEvaluationRouter);

}

module.exports = routerApi;
