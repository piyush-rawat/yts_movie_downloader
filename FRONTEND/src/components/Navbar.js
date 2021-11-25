import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { search } from "../redux/actions/searchActions";

import MovieModal from "./MovieModal";

const Navbar = () => {
  const { loading, movies, error_msg } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const searchInputRef = useRef();

  const onInput = (e) => {
    if (e.target.value.length == 0) {
      setShowSearchResults(false);
    }
    // if (e.target.value.length > 0) {
    //   dispatch(search(e.target.value));
    //   setShowSearchResults(true);
    // }
  };

  const [showSearchResults, setShowSearchResults] = useState(false);

  const onSearch = () => {
    if (searchInputRef.current.value.length > 0) {
      dispatch(search(searchInputRef.current.value));
      setShowSearchResults(true);
    }
  };

  const [showMovieModal, setShowMovieModal] = useState(null);

  const openSearchResult = (movie) => {
    setShowMovieModal(movie);
  };

  return (
    <nav>
      <h1 className="nav-title">YTS Movies</h1>
      <div className="search-box-container">
        <input
          ref={searchInputRef}
          className="search-box"
          type="text"
          placeholder="Search Movies"
          onInput={onInput}
        />
        <button className="btn-search" onClick={onSearch}>
          Search
        </button>
        {showSearchResults && (
          <div className="search-results">
            {error_msg ? (
              <p>{error_msg}</p>
            ) : loading ? (
              <p>Searching...</p>
            ) : (
              movies.map((movie) => {
                return (
                  <>
                    <div
                      className="search-result"
                      style={{ display: "flex", padding: 10 }}
                      onClick={() => openSearchResult(movie)}
                    >
                      <img
                        src={movie.small_cover_image}
                        style={{ marginRight: 10 }}
                      />
                      <div>
                        <p>{movie.title_english}</p>
                        <p>{movie.year}</p>
                      </div>
                    </div>
                    {showMovieModal && (
                      <MovieModal
                        showMovieModal={showMovieModal}
                        setShowMovieModal={setShowMovieModal}
                      />
                    )}
                  </>
                );
              })
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
