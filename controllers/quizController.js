const quizService = require('../services/quizService');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await quizService.createQuiz(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await quizService.getQuizzes();
    res.json(quizzes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
