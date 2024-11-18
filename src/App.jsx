import React, { useState } from "react";
import MovieList from "./compnents/MovieList/MovieList";
import Filter from "./compnents/Filter/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller.",
      posterURL: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Exploring the universe.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4,
    },
    {
      title: "The Dark Knight",
      description: "A tale of the Caped Crusader.",
      posterURL: "https://via.placeholder.com/150",
      rating: 5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (title, rating) => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter movie description:"),
      posterURL: prompt("Enter movie poster URL:"),
      rating: Number(prompt("Enter movie rating (0-5):")),
    };
    if (newMovie.title && newMovie.rating >= 0 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      setFilteredMovies([...movies, newMovie]);
    }
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
