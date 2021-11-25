import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import SortBy from "../components/SortBy";
import Pagination from "../components/Pagination";
import Movie from "../components/Movie";
import MovieModal from "../components/MovieModal";

import { getMovies } from "../redux/actions/moviesActions";

const HomePage = () => {
  const { loading, movies, error_msg } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [showMovieModal, setShowMovieModal] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <Navbar />
      <SortBy />
      {loading ? (
        <h1 className="spinner">Loading...</h1>
      ) : error_msg ? (
        <h1 className="">{error_msg}</h1>
      ) : (
        <>
          <Pagination />
          <div className="movie-container">
            {movies.map((movie) => (
              <div className="movie">
                <Movie movie={movie} setShowMovieModal={setShowMovieModal} />
              </div>
            ))}
          </div>
        </>
      )}
      {showMovieModal && (
        <MovieModal
          showMovieModal={showMovieModal}
          setShowMovieModal={setShowMovieModal}
        />
      )}
    </>
  );
};

export default HomePage;
