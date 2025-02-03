const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();

router.post('/', questionController.createQuestion);
router.get('/:quizId', questionController.getQuestionsByQuiz);

module.exports = router;
