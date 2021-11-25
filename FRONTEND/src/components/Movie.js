import React from "react";

const Movie = ({ movie, setShowMovieModal }) => {
  const showModal = () => {
    document.body.style.overflowY = "hidden";
    setShowMovieModal(movie);
  };

  return (
    <>
      <div>
        <img
          className="movie_cover_img"
          src={movie.medium_cover_image}
          onClick={showModal}
        />
        <div className="hide">
          <h1>IMDB {movie.rating}</h1>
          <p>{movie.genres}</p>
          <button>View Details</button>
        </div>
      </div>
      <h3 className="movie_title">{movie.title_english}</h3>
      <p>{movie.year}</p>
    </>
  );
};

export default Movie;
