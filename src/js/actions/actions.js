import { ADD_NEWMOVIE, EDIT_MOVIE } from '../constant/action-types';

export const addNewMovie = (payload) => ({
  type: ADD_NEWMOVIE,
  payload,
});

export const editMovie = (payload) => ({
  type: EDIT_MOVIE,
  payload,
});
