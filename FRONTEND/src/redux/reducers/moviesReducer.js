import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  SET_LOADING,
} from "../constants/constants";

const initialState = {
  loading: true,
  moviesCount: 0,
  movie_count: null,
  page_number: null,
  genre: "",
  // sort_by: "",
  movies: [],
  error_msg: "",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      return {
        ...state,
        genre: action.genre || "",
        sort_by: action.sort_by || "",
        movie_count: action.payload.movie_count,
        page_number: action.payload.page_number,
        movies: action.payload.movies,
        loading: false,
      };
    }
    case GET_MOVIES_FAILURE: {
      return {
        ...state,
        genre: "",
        sort_by: "",
        movie_count: null,
        page_number: null,
        movies: [],
        error_msg: action.payload,
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        error_msg: "",
        loading: true,
      };
    }
    default:
      return state;
  }
};
