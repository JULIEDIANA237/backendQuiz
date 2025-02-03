const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Quiz extends Model {
    static associate(models) {
      // Un quiz est créé par un utilisateur
      Quiz.belongsTo(models.User, {
        foreignKey: 'creatorId',
        as: 'creator',
      });
      // Un quiz contient plusieurs questions
      Quiz.hasMany(models.Question, {
        foreignKey: 'quizId',
        as: 'questions',
      });
      // Un quiz peut avoir plusieurs réponses (tentatives des utilisateurs)
      Quiz.hasMany(models.Answer, {
        foreignKey: 'quizId',
        as: 'answers',
      });
    }
  }

  Quiz.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      creatorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Quiz',
      tableName: 'Quizzes',
      timestamps: true,
    }
  );

  return Quiz;
};
