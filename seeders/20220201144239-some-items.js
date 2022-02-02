'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'todoItems',
      [
        {
          task: 'Clean my room',
          deadline: 'tomorrow',
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Study',
          deadline: 'tomorrow',
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Go to practice',
          deadline: 'tomorrow',
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Wash equipment',
          deadline: 'tomorrow',
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Become a developer',
          deadline: '3 months',
          listId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todoItems', null, {});
  },
};
