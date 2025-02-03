const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

router.post('/', quizController.createQuiz);
router.get('/', quizController.getQuizzes);

module.exports = router;
