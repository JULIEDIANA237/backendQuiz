require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password237',
    database: process.env.DB_NAME || 'quizzes',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  // configurations pour production et test peuvent être ajoutées ici
};
