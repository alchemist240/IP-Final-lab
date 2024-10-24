import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Kshitij's top Movies Database</h1>
      </header>
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : selectedMovie ? (
        <div className="movie-detail">
          <h2>{selectedMovie.title} ({selectedMovie.year})</h2>
          <p><strong>Genre:</strong> {selectedMovie.genre}</p>
          <p>{selectedMovie.description}</p>
          <button className="back-button" onClick={handleBackClick}>Back to Movies List</button>
        </div>
      ) : (
        <div className="movie-list">
          {movies.map(movie => (
            <div key={movie.id} className="movie-item" onClick={() => handleMovieClick(movie)}>
              <h2>{movie.title} ({movie.year})</h2>
              <p><strong>Genre:</strong> {movie.genre}</p>
            </div>
          ))}
        </div>
      )}
      <footer className="app-footer">
        <p>© 2024 Kshitij Movie Database. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
