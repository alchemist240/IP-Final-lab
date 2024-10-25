// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample recipe data
const recipes = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        ingredients: ['spaghetti', 'eggs', 'Parmesan cheese', 'pancetta', 'black pepper'],
        instructions: 'Cook spaghetti. In a bowl, mix eggs and cheese. Fry pancetta. Combine all.',
    },
    {
        id: 2,
        title: 'Chicken Curry',
        ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion', 'garlic'],
        instructions: 'Sauté onion and garlic, add chicken and curry powder, then stir in coconut milk.',
    },
    {
        id: 3,
        title: 'Chocolate Cake',
        ingredients: ['flour', 'cocoa powder', 'sugar', 'eggs', 'butter'],
        instructions: 'Mix dry ingredients. Add eggs and melted butter. Bake at 350°F for 30 mins.',
    },
];

// GET endpoint for fetching all recipes
app.get('/api/recipes', (req, res) => {
    res.json(recipes);
});

// GET endpoint for fetching a single recipe by ID
app.get('/api/recipes/:id', (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
