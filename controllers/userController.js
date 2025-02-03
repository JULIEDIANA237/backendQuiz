// src/controllers/userController.js
const userService = require('../services/userService');

exports.register = async (req, res) => {
  try {
    const userData = req.body;

    // Si un fichier avatar est envoyé, ajoutez son chemin aux données utilisateur
    if (req.file) {
      userData.avatar = req.file.path; // Vous pouvez aussi transformer ce chemin en URL si nécessaire
    }

    const user = await userService.register(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await userService.login(req.body.email, req.body.password);
    res.json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
