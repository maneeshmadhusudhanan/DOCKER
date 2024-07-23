const { model,Schema} =require('mongoose');

const recipeBook = new Schema({
    recipeId: { type: String, required: true },
    recipeName: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
  
});

const courses = model('recipes', recipeBook);

module.exports = courses;
