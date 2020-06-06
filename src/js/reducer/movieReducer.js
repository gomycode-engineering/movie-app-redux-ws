import {
  ADD_NEWMOVIE,
  SEARCH_WORD,
  SEARCH_RATE,
} from '../constant/action-types';
import { moviesList } from '../../assets/mookData';

const initialState = {
  movieList: moviesList,
  searchWord: '',
  ratingSearch: 0,
};
const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEWMOVIE:
      return {
        movieList: [...state.movieList, payload],
      };
    case SEARCH_WORD:
      return {
        ...state,
        searchWord: payload,
      };
    case SEARCH_RATE:
      return {
        ...state,
        searchWord: payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
