import React from "react";
import { actors } from "../data";
import { v4 as uuidv4 } from "uuid";

function Actors() {
  function actorsInfo() {
    return actors.map((actor) => (
      <div key={uuidv4()}>
        <h3>Name: {actor.name}</h3>
        <div>
          Movies:
          {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </div>
      </div>
    ));
  }
  return (
    <div>
      <h1>Actors Page</h1>
      <div>{actorsInfo()}</div>
    </div>
  );
}

export default Actors;
