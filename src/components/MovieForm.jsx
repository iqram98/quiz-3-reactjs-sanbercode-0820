import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import axios from "axios";

const MovieForm = () => {
  const [
    movies,
    setMovies,
    input,
    setInput,
    addMovie,
    setAddMovie,
    editMovie,
    setEditMovie,
  ] = useContext(MovieContext);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleChangeYear = (event) => {
    if (event.target.value < 1980) {
      event.target.value = 1980;
    } else if (event.target.value > 2020) {
      event.target.value = 2020;
    }
    setInput({ ...input, year: event.target.value });
  };

  const handleChangeRating = (event) => {
    if (event.target.value < 0) {
      event.target.value = 0;
    } else if (event.target.value > 10) {
      event.target.value = 10;
    }
    setInput({ ...input, rating: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.id !== null) {
      axios
        .put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`, {
          title: input.title,
          description: input.description,
          year: input.year,
          duration: input.duration,
          genre: input.genre,
          rating: input.rating,
          image_url: input.image_url,
        })
        .then((res) => {
          let newMovie = movies.map((movie) => {
            if (movie.id === input.id) {
              movie.title = input.title;
              movie.description = input.description;
              movie.year = input.year;
              movie.duration = input.duration;
              movie.genre = input.genre;
              movie.rating = input.rating;
              movie.image_url = input.image_url;
            }
            return movie;
          });
          setMovies(newMovie);
        });
      setEditMovie(false);
      setInput({
        title: "",
        description: "",
        year: "2020",
        duration: "120",
        genre: "",
        rating: "0",
        image_url: "",
      });
    } else {
      event.preventDefault();
      axios
        .post(`http://backendexample.sanbercloud.com/api/movies`, {
          title: input.title,
          description: input.description,
          year: input.year,
          duration: input.duration,
          genre: input.genre,
          rating: input.rating,
          image_url: input.image_url,
        })
        .then((res) => {
          setMovies([...movies, res.data]);
        });
      setAddMovie(false);
      setInput({
        title: "",
        description: "",
        year: "2020",
        duration: "120",
        genre: "",
        rating: "0",
        image_url: "",
      });
    }
  };

  const handleCancel = () => {
    setAddMovie(false);
    setEditMovie(false);
    setInput({
      title: "",
      description: "",
      year: "2020",
      duration: "120",
      genre: "",
      rating: "0",
      image_url: "",
    });
  };

  if (addMovie === true || editMovie === true) {
    return (
      <div className="MovieForm">
        <form onSubmit={handleSubmit}>
          <div className="headForm">
            <h3>Movie Form</h3>
          </div>
          <label>Title : </label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={input.title}
          />
          <label>Description : </label>
          <textarea
            row="10"
            name="description"
            type="number"
            onChange={handleChange}
            value={input.description}
          />
          <label>Year : </label>
          <input
            name="year"
            type="number"
            onChange={handleChangeYear}
            value={input.year}
          />
          <label>Duration : </label>
          <input
            name="duration"
            type="number"
            onChange={handleChange}
            value={input.duration}
          />
          <label>Genre : </label>
          <input
            name="genre"
            type="text"
            onChange={handleChange}
            value={input.genre}
          />
          <label>Rating : </label>
          <input
            name="rating"
            type="number"
            onChange={handleChangeRating}
            value={input.rating}
          />
          <label>Image Url : </label>
          <input
            name="image_url"
            type="text"
            onChange={handleChange}
            value={input.image_url}
          />
          <button className="tombolSubmit" type="submit">
            submit
          </button>
          <button className="tombolCancel" onClick={handleCancel}>
            cancel
          </button>
        </form>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MovieForm;
