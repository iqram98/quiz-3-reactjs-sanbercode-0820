import React from "react";
import { MovieProvider } from "./components/MovieContext";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

const Movie = () => {
  return (
    <MovieProvider>
      <MovieList />
      <MovieForm />
    </MovieProvider>
  );
};

export default Movie;
