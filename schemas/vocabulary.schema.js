const Joi = require('joi');

const id = Joi.number().integer();
const word = Joi.string();
const wordImage = Joi.string();
const wordAudio = Joi.string();
const exampleAudio = Joi.string();
const exampleWrited1 = Joi.string();
const exampleWrited2 = Joi.string();
const exampleWrited3 = Joi.string();
const synonymous = Joi.string();
const antonyms = Joi.string();
const teoryOfWord= Joi.string();
const offset = Joi.number().integer();
const limit = Joi.number().integer();

const createWordsSchema = Joi.object({
  word: word.required(),
  wordImage: wordImage.required(),
  wordAudio: wordAudio.required(),
  exampleAudio: exampleAudio.required(),
  exampleWrited1: exampleWrited1.required(),
  exampleWrited2: exampleWrited2.required(),
  exampleWrited3: exampleWrited3.required(),
  synonymous: synonymous.required(),
  antonyms: antonyms.required(),
  teoryOfWord: teoryOfWord.required(),
});

const updateWordsSchema = Joi.object({
  word: word,
  wordImage: wordImage,
  wordAudio: wordAudio,
  exampleAudio: exampleAudio,
  exampleWrited1: exampleWrited1,
  exampleWrited2: exampleWrited2,
  exampleWrited3: exampleWrited3,
  synonymous: synonymous,
  antonyms: antonyms,
  teoryOfWord: teoryOfWord,
});

const getWordsSchema = Joi.object({
  id: id.required(),
});

const queryWordsSchema = Joi.object({
  limit,
  offset,
  word,
});
module.exports = { createWordsSchema, updateWordsSchema, getWordsSchema, queryWordsSchema };
