import React from 'react';
import foodpic from '../assets/food.jpg'

const Popularrecipies = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img
        src={foodpic} alt="Recipe Image" className="rounded w-full h-32 object-cover mb-4"/>
      <h3 className="text-xl font-semibold">{recipe.recipeName}</h3>
      <h1 className='text-xl font-semibold'>Ingredients</h1>
      <p className="text-gray-600">{recipe.ingredients}</p>
      <h1 className='text-xl font-semibold'>Instructions</h1>
      <p className="text-gray-600">{recipe.instructions}</p>
    </div>
  );
};

export default Popularrecipies;
