// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const upload = require('../middlewares/uploadMiddleware');

const router = express.Router();

// Utilisation de upload.single('avatar') pour traiter le champ "avatar"
router.post('/register', upload.single('avatar'), userController.register);
router.post('/login', userController.login);

module.exports = router;
