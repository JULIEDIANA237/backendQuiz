const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Question extends Model {
    static associate(models) {
      // Une question appartient à un quiz
      Question.belongsTo(models.Quiz, {
        foreignKey: 'quizId',
        as: 'quiz',
      });
    }
  }

  Question.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Quizzes',
          key: 'id',
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        // Exemple: 'MCQ', 'vrai/faux', 'texte'
      },
      options: {
        type: DataTypes.JSON,
        allowNull: true, // seulement pour les types avec options
      },
      correctAnswer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Question',
      tableName: 'Questions',
      timestamps: true,
    }
  );

  return Question;
};
