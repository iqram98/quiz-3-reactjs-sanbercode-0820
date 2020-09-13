import React, { Component } from "react";
import axios from "axios";

class MovieThumb extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(`http://backendexample.sanbercloud.com/api/movies`)
      .then((res) => {
        let movies = res.data;
        this.setState({ movies });
      });
  }

  render() {
    return (
      <div className="MovieThumb">
        <h2>Daftar Film Terbaik</h2>
        {this.state.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.image_url} alt="img" />
              <p>Rating : {movie.rating}</p>
              <p>Durasi : {movie.duration}</p>
              <p>Genre : {movie.genre}</p>
              <p>
                <b>Deskripsi : </b>
                {movie.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieThumb;
