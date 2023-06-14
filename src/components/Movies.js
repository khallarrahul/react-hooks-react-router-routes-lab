import React from "react";
import { movies } from "../data";

function Movies() {
  function movieInfo() {
    return movies.map((movie) => (
      <div key={movie.title}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <div>
          <h3>Genres:</h3>
          <ul>{movieGenre(movie.genres)}</ul>
        </div>
      </div>
    ));
  }

  function movieGenre(genres) {
    return genres.map((genre) => <li key={genre}>{genre}</li>);
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {movieInfo()}
    </div>
  );
}

export default Movies;
