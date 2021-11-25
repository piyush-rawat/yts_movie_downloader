import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeGenre, sortBy } from "../redux/actions/moviesActions";

const SortBy = () => {
  const dispatch = useDispatch();
  const { genre, sort_by } = useSelector((state) => state.movies);

  const genreRef = useRef();

  const changeColor = (e) => {};

  const onChangeGenre = (e) => {
    dispatch(changeGenre(e.target.value, sort_by));
  };

  return (
    <>
      <div className="sortby-container">
        <div onClick={changeColor} className="genre-div">
          <label className="sortby-label">Genre</label>
          <select ref={genreRef} className="dropdown" onChange={onChangeGenre}>
            <option value="" className="dropdown-item">
              All
            </option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Film-Noir">Film-Noir</option>
            <option value="Game-Show">Game-Show</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="News">News</option>
            <option value="Reality-TV">Reality-TV</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Sport">Sport</option>
            <option value="Talk-Show">Talk-Show</option>
            <option value="Thriller">Thriller</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortBy;
