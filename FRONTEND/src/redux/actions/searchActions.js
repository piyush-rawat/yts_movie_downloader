import axios from "axios";

import {
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  SET_SEARCH_LOADING,
} from "../constants/constants";

export const search = (q) => async (dispatch) => {
  dispatch({ type: SET_SEARCH_LOADING });
  try {
    const response = await axios.get(`/search?q=${q}`);
    if (response.data.movies) {
      dispatch({ type: SEARCH_MOVIE_SUCCESS, payload: response.data.movies });
    }
    if (response.data.error_msg) {
      dispatch({
        type: SEARCH_MOVIE_FAILURE,
        payload: response.data.error_msg,
      });
    }
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIE_FAILURE,
      payload: "Error fetching data.",
    });
  }
};
