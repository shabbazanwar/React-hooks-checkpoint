import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.title}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.rating}/5</p>
      </div>
    </Link>
  );
};

export default MovieCard;
