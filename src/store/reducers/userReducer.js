import { fromJS } from 'immutable';

import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from '../constants';

// The initial state of the App
export const initialState = fromJS({
  data: {},
  success: false,
  loading: false,
  isAdmin: false,
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return state.set('data', {}).set('success', false).set('loading', true);
    case CREATE_USER_SUCCESS:
      return state.set('data', action.payload).set('success', true).set('loading', false);
    case CREATE_USER_FAILED:
      return state.set(initialState);
    case LOGIN_USER_REQUEST:
      return state.set('data', {}).set('success', false).set('loading', true);
    case LOGIN_USER_SUCCESS:
      return state.set('isAdmin', action.payload.isAdmin).set('success', true).set('loading', false);
    case LOGIN_USER_FAILED:
      return state.set(initialState);
    default:
      return state;
  }
}

export default userReducer;
