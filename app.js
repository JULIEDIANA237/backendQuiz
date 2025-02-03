require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const quizRoutes = require('./routes/quizRoutes');
const questionRoutes = require('./routes/questionRoutes');
const answerRoutes = require('./routes/answerRoutes');

const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);
app.use('/answers', answerRoutes);

sequelize.sync().then(() => console.log('Base de données synchronisée'));

module.exports = app;
