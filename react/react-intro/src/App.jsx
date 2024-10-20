import React from "react";
import "./App.css";
import Person from "./Person";
import Animal from "./Animal";
import MovieList from "./MovieList";
const movieDetail = {
  name: "Animal",
  leadActor: "Ranbir Kapoor",
};

const App = () => {
  return (
    <div>
      {/* <h1>Sweet Heart</h1> */}
      {/* <Person/> */}
      {/* <Animal  name="Dog" age={15} />
<Animal  name="Cat" age={10} />
<Animal  name="Sujata" age={75} /> */}

      <MovieList name={movieDetail.name} leadActor={movieDetail.leadActor} />
    </div>
  );
};

export default App;
