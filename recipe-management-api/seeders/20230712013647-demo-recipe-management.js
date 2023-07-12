'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('recipe_management', [  {
    title: "Recipe 1",
    description: "good taste",
    ingredients: "air",
    instructions: "Stir it and done",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Recipe 2",
    description: "Taste nice",
    ingredients: "flour, sugar, eggs",
    instructions: "Bake it to perfection",
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    title: "Recipe 3",
    description: "wow amazing taste",
    ingredients: "meat, vegetables, marinade",
    instructions: "Grill it for a smoky flavor",
    created_at: new Date(),
    updated_at: new Date()
  }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('recipe_management', null, {});
  }
};
