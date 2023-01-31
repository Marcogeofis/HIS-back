
const { User, userBBSchema} = require('./user.models');
const { Student, studentSchema } = require('./student.models');
const { ActiveStudent, activeStudentSchema } = require('./activeStudent.models');
const { ClassOfCourse, classOfCourseSchema } = require('./class.models');
const { Teacher, teacherSchema } = require('./teacher.models');
const { TeacherProgress, teacherProgressSchema } = require('./teacherProgress.models');
const { EvaluationStudent, evaluationStudentSchema } = require('./evaluationStudent.models');
const { LevelCourse, levelCourseSchema } = require('./levelCourse.models');
const { Vocabulary, vocabularySchema } = require('./vocabulary.models');
const { AppBB, appBBSchema } = require('./appBB.models');
const { Courses, coursesSchema } = require('./courses.models');
const { RollPlayAudios, rollPlayAudioSchema } = require('./rollPlays.models');
const { TeacherListOfStudents, teacherListSchema } = require('./teacherList.models');
const { PhoneticSounds, phoneticSoundsSchema } = require('./phoneticTable.models');
const { AdvanceCourseclass, advanceCourseSchema } = require('./advanceClass.models')
const { IntermediateCourse, intermediateCourseSchema } = require('./intermediateClass.model')
const { BasicCourseclass, basicCourseSchema } = require('./basicClass.models')
// const {  } = require('.');

function setupModels(sequelize){
  User.init(userBBSchema, User.config(sequelize));
  Student.init(studentSchema, Student.config(sequelize));
  ActiveStudent.init(activeStudentSchema, ActiveStudent.config(sequelize));
  ClassOfCourse.init(classOfCourseSchema, ClassOfCourse.config(sequelize));
  Teacher.init(teacherSchema, Teacher.config(sequelize));
  TeacherProgress.init(teacherProgressSchema, TeacherProgress.config(sequelize));
  EvaluationStudent.init(evaluationStudentSchema, EvaluationStudent.config(sequelize));
  LevelCourse.init(levelCourseSchema, LevelCourse.config(sequelize));
  Vocabulary.init(vocabularySchema, Vocabulary.config(sequelize));
  Courses.init(coursesSchema, Courses.config(sequelize));
  AppBB.init(appBBSchema, AppBB.config(sequelize));
  RollPlayAudios.init(rollPlayAudioSchema, RollPlayAudios.config(sequelize));
  TeacherListOfStudents.init(teacherListSchema, TeacherListOfStudents.config(sequelize));
  PhoneticSounds.init(phoneticSoundsSchema, PhoneticSounds.config(sequelize));
  AdvanceCourseclass.init(advanceCourseSchema, AdvanceCourseclass.config(sequelize));
  IntermediateCourse.init(intermediateCourseSchema, IntermediateCourse.config(sequelize));
  BasicCourseclass.init(basicCourseSchema, BasicCourseclass.config(sequelize));

  //asociaciones
  User.associate(sequelize.models);
  Student.associate(sequelize.models);
  ActiveStudent.associate(sequelize.models);
  ClassOfCourse.associate(sequelize.models);
  Teacher.associate(sequelize.models);
  EvaluationStudent.associate(sequelize.models);
  LevelCourse.associate(sequelize.models);
  Vocabulary.associate(sequelize.models);
}

module.exports = setupModels;
