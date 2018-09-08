import { fromJS } from 'immutable';

import {
  CREATE_GENRE_REQUEST,
  CREATE_GENRE_SUCCESS,
  CREATE_GENRE_FAILED,
  GET_GENERE_REQUEST,
  GET_GENERE_SUCCESS,
  GET_GENERE_FAILED,
  DELETE_GENERE_REQUEST,
  DELETE_GENERE_SUCCESS,
  DELETE_GENERE_FAILED,
} from '../constants';

// The initial state of the App
export const initialState = fromJS({
  data: {},
  success: false,
  loading: false
});

function genreReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GENRE_REQUEST:
      return state.set('data', {}).set('success', false).set('loading', true);
    case CREATE_GENRE_SUCCESS:
      return state.set('data', action.payload).set('success', true).set('loading', false);
    case CREATE_GENRE_FAILED:
      return state.set(initialState);
    case GET_GENERE_REQUEST:
      return state.set('data', {}).set('success', false).set('loading', true);
    case GET_GENERE_SUCCESS:
      return state.set('data', action.payload).set('success', true).set('loading', false);
    case GET_GENERE_FAILED:
      return state.set(initialState);
    case DELETE_GENERE_REQUEST:
      return state.set('data', {}).set('success', false).set('loading', true);
    case DELETE_GENERE_SUCCESS:
      return state.set('data', action.payload).set('success', true).set('loading', false);
    case DELETE_GENERE_FAILED:
      return state.set(initialState);
    default:
      return state;
  }
}

export default genreReducer;
