// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import backgroundImage from './assets/background.jpg';

const Navbar = () => {
    return (
        <nav>
            <h1>Recipe Showcase</h1>
            <Link to="/">Home</Link>
        </nav>
    );
};

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await axios.get('http://localhost:5000/api/recipes');
            setRecipes(response.data);
        };

        fetchRecipes();
    }, []);

    return (
        <div className="recipe-list">
            <h2>Popular Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await axios.get(`http://localhost:5000/api/recipes/${id}`);
            setRecipe(response.data);
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="recipe-detail">
            <h2>{recipe.title}</h2>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipes/:id" element={<RecipeDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
