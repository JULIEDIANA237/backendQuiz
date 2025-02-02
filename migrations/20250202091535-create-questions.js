'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quizId: { // association avec le quiz
        type: Sequelize.INTEGER,
        references: {
          model: 'Quizzes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      text: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING, // par exemple: 'MCQ', 'vrai/faux', 'texte'
      },
      options: {
        type: Sequelize.JSON, // stocke les options de réponses sous forme de JSON
      },
      correctAnswer: {
        type: Sequelize.STRING, // réponse correcte (peut être adaptée selon le type)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};
