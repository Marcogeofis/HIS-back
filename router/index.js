const express = require('express');

const userRouter = require('./user.router');
const coursesRouter = require('./courses.router');
const studentRouter = require('./student.router');
const evaluationStudentRouter = require('./evaluationStudent.router');
const teacherRouter = require('./teacher.router');
const teacherProgressRouter = require('./teacherProgres.router');
const levelCourseRouter = require('./levelCourse.router');
const classRouter = require('./class.router');
const appBBRouter = require('./appBB.router');
const vocabularyRouter = require('./vocabulary.router');
const activeStudentsRouter = require('./activeStudent.router');
const rollPlaysRouter = require('./rollPlays.router');
const authRouter = require('./auth.router');
const teacherListRouter = require('./teacherlist.router');
const phoneticTableRouter = require('./phoneticTable.router');
const intermediateClassRouter = require('./intermedateClass.router');
const advanceClassRouter = require('./advanceClass.router');
const basicClassRouter = require('./basicClass.router');
const teacherGroupsRouter = require('./teacherlist.router')

function routerApi(app){
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/user', userRouter);
  router.use('/courses', coursesRouter);
  router.use('/student', studentRouter);
  router.use('/evaluation-student', evaluationStudentRouter);
  router.use('/teacher', teacherRouter);
  router.use('/teacher-progress', teacherProgressRouter);
  router.use('/teacher-groups', teacherGroupsRouter);
  router.use('/level-course', levelCourseRouter);
  router.use('/class-of-course', classRouter);
  router.use('/appBB-progress', appBBRouter);
  router.use('/vocabulary', vocabularyRouter);
  router.use('/active-students', activeStudentsRouter);
  router.use('/rollPlays', rollPlaysRouter);
  router.use('/auth', authRouter);
  router.use('/teacher-course',teacherListRouter);
  router.use('/phonetic-table', phoneticTableRouter);
  router.use('/intermediate-course', intermediateClassRouter);
  router.use('/advance-course', advanceClassRouter);
  router.use('/basic-course', basicClassRouter);
}

module.exports = routerApi;
