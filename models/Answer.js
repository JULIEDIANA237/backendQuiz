const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Answer extends Model {
    static associate(models) {
      // Une réponse est associée à un utilisateur
      Answer.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      // Une réponse est associée à un quiz
      Answer.belongsTo(models.Quiz, {
        foreignKey: 'quizId',
        as: 'quiz',
      });
    }
  }

  Answer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Quizzes',
          key: 'id',
        },
      },
      givenAnswers: {
        type: DataTypes.JSON,
        allowNull: false,
        // Stocke les réponses fournies par l'utilisateur (format JSON)
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'Answer',
      tableName: 'Answers',
      timestamps: true,
    }
  );

  return Answer;
};
