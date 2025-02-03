const { Question } = require('../models');

const createQuestion = async (questionData) => {
  return await Question.create(questionData);
};

const getQuestionsByQuiz = async (quizId) => {
  return await Question.findAll({ where: { quizId } });
};

module.exports = { createQuestion, getQuestionsByQuiz };
