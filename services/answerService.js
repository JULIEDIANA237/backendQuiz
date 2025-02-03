const { Answer, Quiz, Question } = require('../models');

const submitAnswers = async (userId, quizId, givenAnswers) => {
  const questions = await Question.findAll({ where: { quizId } });

  let score = 0;
  questions.forEach((question) => {
    if (givenAnswers[question.id] === question.correctAnswer) {
      score++;
    }
  });

  return await Answer.create({
    userId,
    quizId,
    givenAnswers,
    score,
  });
};

const getUserAnswers = async (userId, quizId) => {
  return await Answer.findOne({ where: { userId, quizId } });
};

module.exports = { submitAnswers, getUserAnswers };
