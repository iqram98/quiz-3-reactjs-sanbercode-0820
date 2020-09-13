import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    year: "2020",
    duration: "120",
    genre: "",
    rating: "0",
    image_url: "",
    id: null,
  });
  const [addMovie, setAddMovie] = useState(false);
  const [editMovie, setEditMovie] = useState(false);

  useEffect(() => {
    if (movies === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/movies`)
        .then((res) => {
          setMovies(res.data);
        });
    }
  });

  return (
    <MovieContext.Provider
      value={[
        movies,
        setMovies,
        input,
        setInput,
        addMovie,
        setAddMovie,
        editMovie,
        setEditMovie,
      ]}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
