const questionService = require('../services/questionService');

exports.createQuestion = async (req, res) => {
  try {
    const question = await questionService.createQuestion(req.body);
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getQuestionsByQuiz = async (req, res) => {
  try {
    const questions = await questionService.getQuestionsByQuiz(req.params.quizId);
    res.json(questions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
