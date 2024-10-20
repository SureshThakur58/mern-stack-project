import React from "react";

const MovieList = (props) => {
  return (
    <div>
      <h1>Movie Name:{props.name}</h1>
      <p>Actor:{props.leadActor}</p>
    </div>
  );
};

export default MovieList;
