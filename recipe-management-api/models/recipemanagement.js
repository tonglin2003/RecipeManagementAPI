'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeManagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RecipeManagement.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        longerThanThree(value){
          if (value.length < 3){
            throw new Error("The minimum of the title must be greater or equal to three");
          }
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validLength(value){
          if (value.length > 500){
            throw new Error("The maximum of the desciption is 500 chararacters");
          }
        }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validLength(value){
          if (value.length > 1000){
            throw new Error(`The maximum of the ingredients is 1000 chararacters, you have pass the maximum by ${value.length - 1000}`);
          }
        }
      }
    },

    instructions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validLength(value){
          if (value.length > 5000){
            throw new Error(`The maximum of the instructions is 5000 chararacters, you have pass the maximum by ${value.length - 5000}`);
          }
        }
      }
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'RecipeManagement',
    tableName: 'recipe_management',
    underscored: true
  });
  return RecipeManagement;
};