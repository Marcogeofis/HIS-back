'use strict';

const { USER_TABLE, userBBSchema } = require('../models/user.models');
const { STUDENT_TABLE, studentSchema } = require('../models/student.models');
const { ACTIVESTUDENT_TABLE, activeStudentSchema } = require('../models/activeStudent.models');
const { CLASSOFCOURSE_TABLE, classOfCourseSchema } = require('../models/class.models');
const { TEACHER_TABLE, teacherSchema } = require('../models/teacher.models');
const { TEACHERPROGRESS_TABLE, teacherProgressSchema } = require('../models/teacherProgress.models');
const { EVALUATION_STUDENT_TABLE, evaluationStudentSchema } = require('../models/evaluationStudent.models');
const { LEVELCOURSE_TABLE, levelCourseSchema } = require('../models/levelCourse.models');
const { VOCABULARY_TABLE, vocabularySchema } = require('../models/vocabulary.models');
const { COURSES_TABLE, coursesSchema } = require('../models/courses.models');
const { APPBB_TABLE, appBBSchema } = require('../models/appBB.models');
const { ROLLPLAY_TABLE, rollPlayAudioSchema } = require('../models/rollPlays.models')
const { TEACHERLIST_TABLE, teacherListSchema } = require('../models/teacherList.models');
const { PHONETIC_TABLE, phoneticSoundsSchema} = require('../models/phoneticTable.models');
const { ADVANCECLASS_TABLE, advanceCourseSchema } = require('../models/advanceClass.models');
const { INTERMEDIATECLASS_TABLE, intermediateCourseSchema } = require('../models/intermediateClass.model');
const { BASICCLASS_TABLE, basicCourseSchema } = require('../models/basicClass.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, userBBSchema);
    await queryInterface.createTable(STUDENT_TABLE, studentSchema);
    await queryInterface.createTable(ACTIVESTUDENT_TABLE, activeStudentSchema);
    await queryInterface.createTable(CLASSOFCOURSE_TABLE, classOfCourseSchema);
    await queryInterface.createTable(TEACHER_TABLE, teacherSchema);
    await queryInterface.createTable(TEACHERPROGRESS_TABLE, teacherProgressSchema);
    await queryInterface.createTable(EVALUATION_STUDENT_TABLE, evaluationStudentSchema);
    await queryInterface.createTable(LEVELCOURSE_TABLE, levelCourseSchema);
    await queryInterface.createTable(VOCABULARY_TABLE, vocabularySchema);
    await queryInterface.createTable(COURSES_TABLE, coursesSchema);
    await queryInterface.createTable(APPBB_TABLE, appBBSchema);
    await queryInterface.createTable(ROLLPLAY_TABLE, rollPlayAudioSchema);
    await queryInterface.createTable(TEACHERLIST_TABLE, teacherListSchema);
    await queryInterface.createTable(PHONETIC_TABLE, phoneticSoundsSchema);
    await queryInterface.createTable(ADVANCECLASS_TABLE, advanceCourseSchema);
    await queryInterface.createTable(INTERMEDIATECLASS_TABLE, intermediateCourseSchema);
    await queryInterface.createTable(BASICCLASS_TABLE, basicCourseSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE, userBBSchema);
    await queryInterface.dropTable(STUDENT_TABLE, studentSchema);
    await queryInterface.dropTable(ACTIVESTUDENT_TABLE, activeStudentSchema);
    await queryInterface.dropTable(CLASSOFCOURSE_TABLE, classOfCourseSchema);
    await queryInterface.dropTable(TEACHER_TABLE, teacherSchema);
    await queryInterface.dropTable(TEACHERPROGRESS_TABLE, teacherProgressSchema);
    await queryInterface.dropTable(EVALUATION_STUDENT_TABLE, evaluationStudentSchema);
    await queryInterface.dropTable(LEVELCOURSE_TABLE, levelCourseSchema);
    await queryInterface.dropTable(VOCABULARY_TABLE, vocabularySchema);
    await queryInterface.dropTable(COURSES_TABLE, coursesSchema);
    await queryInterface.dropTable(APPBB_TABLE, appBBSchema);
    await queryInterface.dropTable(ROLLPLAY_TABLE, rollPlayAudioSchema);
    await queryInterface.dropTable(TEACHERLIST_TABLE, teacherListSchema);
    await queryInterface.dropTable(PHONETIC_TABLE, phoneticSoundsSchema);
    await queryInterface.dropTable(ADVANCECLASS_TABLE, advanceCourseSchema);
    await queryInterface.dropTable(INTERMEDIATECLASS_TABLE, intermediateCourseSchema);
    await queryInterface.dropTable(BASICCLASS_TABLE, basicCourseSchema);
  },
};
