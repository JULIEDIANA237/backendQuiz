const express = require('express');
const answerController = require('../controllers/answerController');

const router = express.Router();

router.post('/', answerController.submitAnswers);
router.get('/:userId/:quizId', answerController.getUserAnswers);

module.exports = router;
