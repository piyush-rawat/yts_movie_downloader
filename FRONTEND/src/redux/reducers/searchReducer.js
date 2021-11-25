import {
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILURE,
  SET_SEARCH_LOADING,
} from "../constants/constants";

const initialState = {
  loading: true,
  movies: [],
  error_msg: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS: {
      return {
        ...state,
        error_msg: "",
        movies: action.payload,
        loading: false,
      };
    }
    case SEARCH_MOVIE_FAILURE: {
      return {
        ...state,
        movies: [],
        error_msg: action.payload,
        loading: false,
      };
    }
    case SET_SEARCH_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};
