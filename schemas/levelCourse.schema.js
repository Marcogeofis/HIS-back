const Joi = require('joi');

const id = Joi.string();
const degree = Joi.string().max(50);
const gradeSection = Joi.string().max(50);
const nameChapter = Joi.string().max(100);
const video = Joi.string().max(50);
const audio = Joi.string().max(50);
const image = Joi.string().max(50);
const vocabulary = Joi.string().max(50);


const createLevelCourseSchema = Joi.object({

  id: id.required(),
  degree: degree.required(),
  gradeSection: gradeSection.required(),
  nameChapter: nameChapter.required(),
  video: video.required(),
  audio: audio.required(),
  image: image.required(),
  vocabulary: vocabulary.required(),
});

const updateLevelCourseSchema = Joi.object({

  degree: degree,
  gradeSection: gradeSection,
  nameChapter: nameChapter,
  video: video,
  audio: audio,
  image: image,
  vocabulary: vocabulary,
});

const getLevelCourseSchema = Joi.object({
  id: id.required(),
});

module.exports = { createLevelCourseSchema, updateLevelCourseSchema, getLevelCourseSchema }
