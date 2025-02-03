const { Quiz } = require('../models');

const createQuiz = async (quizData) => {
  return await Quiz.create(quizData);
};

const getQuizzes = async () => {
  return await Quiz.findAll({ include: ['questions'] });
};

module.exports = { createQuiz, getQuizzes };
