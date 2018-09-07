import { fromJS } from 'immutable';

import {
  CREATE_GENRE_REQUEST,
  CREATE_GENRE_SUCCESS,
  CREATE_GENRE_FAILED,
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
    default:
      return state;
  }
}

export default genreReducer;
