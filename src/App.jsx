import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./compnents/MovieList/MovieList";
import Filter from "./compnents/Filter/Filter";
import MovieDetails from "./compnents/MovieDetails/MovieDetails";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller about dream infiltration.",
      posterURL: "https://m.media-amazon.com/images/I/91TqE5AaFBL._AC_SL1500_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "A journey to save humanity by exploring the stars.",
      posterURL: "https://m.media-amazon.com/images/I/71nGWRv8bOL._AC_SY679_.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      title: "The Dark Knight",
      description: "Batman faces his greatest challenge, the Joker.",
      posterURL: "https://m.media-amazon.com/images/I/51BQSATmnYL._AC_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
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

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilter={handleFilter} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
