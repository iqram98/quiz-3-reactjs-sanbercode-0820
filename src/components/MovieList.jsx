import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import axios from "axios";

const MovieList = () => {
  const [
    movies,
    setMovies,
    ,
    setInput,
    ,
    setAddMovie,
    ,
    setEditMovie,
  ] = useContext(MovieContext);

  const handleTambah = () => {
    setAddMovie(true);
  };

  const handleEdit = (id) => {
    let newMovie = movies.find((movie) => movie.id === id);
    setInput({ ...newMovie });
    setEditMovie(true);
  };

  const handleHapus = (index) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/movies/${index}`)
      .then((res) => {
        let newMovie = movies.filter((movie) => movie.id !== index);
        setMovies(newMovie);
      });
  };

  return (
    <div className="MovieList">
      <h1>Daftar Film</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies !== null &&
            movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.title}</td>
                  <td>
                    <div>{movie.description}</div>
                  </td>
                  <td>{movie.year}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>
                    <button
                      className="tombolEdit"
                      onClick={() => handleEdit(movie.id)}
                    >
                      edit
                    </button>
                    <button
                      className="tombolHapus"
                      onClick={() => handleHapus(movie.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button className="tombolTambah" onClick={handleTambah}>
        Add Movie
      </button>
    </div>
  );
};

export default MovieList;
