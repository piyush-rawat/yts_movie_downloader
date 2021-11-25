import axios from "axios";

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_LOADING,
} from "../constants/constants";

export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get("/movies");
    if (response.data.movies) {
      dispatch({ type: GET_MOVIES_SUCCESS, payload: response.data });
    } else if (response.data.error_msg) {
      dispatch({ type: GET_MOVIES_FAILURE, payload: response.data.error_msg });
    } else {
      dispatch({ type: GET_MOVIES_FAILURE, payload: "Error fetching data." });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILURE, payload: "Error fetching data." });
  }
};

export const changeGenre = (genre, sort_by) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await axios.get(
      `/movies?genre=${genre}&sort_by=${sort_by}`
    );
    if (response.data.movies) {
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: response.data,
        genre: genre,
        sort_by: sort_by,
      });
    } else if (response.data.error_msg) {
      dispatch({ type: GET_MOVIES_FAILURE, payload: response.data.error_msg });
    } else {
      dispatch({ type: GET_MOVIES_FAILURE, payload: "Error fetching data." });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILURE, payload: "Error fetching data." });
  }
};

export const changePage = (page, genre, sort_by) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await axios.get(
      `/movies?page=${page}&genre=${genre}&sort_by=${sort_by}`
    );
    if (response.data.movies) {
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: response.data,
        genre: genre,
        sort_by: sort_by,
      });
    } else if (response.data.error_msg) {
      dispatch({ type: GET_MOVIES_FAILURE, payload: response.data.error_msg });
    } else {
      dispatch({ type: GET_MOVIES_FAILURE, payload: "Error fetching data." });
    }
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAILURE, payload: "Error fetching data." });
  }
};
