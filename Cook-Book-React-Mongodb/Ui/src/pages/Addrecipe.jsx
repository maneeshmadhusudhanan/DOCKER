import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddRecipe = () => {
    const [recipeId, setId] = useState('');
    const [recipeName, setName] = useState('');
    const [ingredients, setIngredient] = useState('');
    const [instructions, setInstruction] = useState('');
    const navigate = useNavigate();

    const addRecipe = async (newRecipe) => {
        const res = await fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        });
        return res;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const newRecipe = { recipeId, recipeName, ingredients, instructions };
        const res = await addRecipe(newRecipe);
        if (res.ok) {
            toast.success('New recipe added');
            navigate('/home');
        } else {
            toast.error('Failed to add recipe');
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto mt-[10%]">
            <h2 className="text-2xl font-bold mb-6">Add Recipe</h2>
            <form onSubmit={submitForm}>
                <div className="mb-4">
                    <label htmlFor="recipe_id" className="block text-gray-700 text-sm font-bold mb-2">Recipe ID</label>
                    <input type="text" id="recipe_id" name="recipeId" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={recipeId} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="recipeName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={recipeName} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
                    <textarea id="ingredients" name="ingredients" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required value={ingredients} onChange={(e) => setIngredient(e.target.value)} ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="instructions" className="block text-gray-700 text-sm font-bold mb-2">Instructions</label>
                    <textarea id="instructions" name="instructions" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required value={instructions} onChange={(e) => setInstruction(e.target.value)} ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipe;
