// src/middleware/uploadMiddleware.js
const multer = require('multer');
const path = require('path');

// Définition du stockage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Les avatars seront stockés dans le dossier uploads/avatars
    cb(null, path.join(__dirname, '../../uploads/avatars'));
  },
  filename: (req, file, cb) => {
    // Génération d'un nom de fichier unique (ex: avatar-1634231231231.png)
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  },
});

// Filtre pour accepter uniquement les images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Le fichier doit être une image.'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
