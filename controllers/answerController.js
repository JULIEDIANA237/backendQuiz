const answerService = require('../services/answerService');

exports.submitAnswers = async (req, res) => {
  try {
    const { userId, quizId, givenAnswers } = req.body;
    const answer = await answerService.submitAnswers(userId, quizId, givenAnswers);
    res.status(201).json(answer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserAnswers = async (req, res) => {
  try {
    const answer = await answerService.getUserAnswers(req.params.userId, req.params.quizId);
    if (!answer) return res.status(404).json({ message: 'Aucune réponse trouvée' });
    res.json(answer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
