import React from "react";
import { directors } from "../data";

function Directors() {
  function directorInfo() {
    return directors.map((director) => (
      <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <div>
          Movies:
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </div>
      </div>
    ));
  }

  return (
    <div>
      <h1>Directors Page</h1>
      <div>{directorInfo()}</div>
    </div>
  );
}

export default Directors;
