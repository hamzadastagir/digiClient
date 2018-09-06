import { fromJS } from 'immutable';

import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
} from '../constants';

// The initial state of the App
export const initialState = fromJS({
  data: {},
  success: false,
  loading: false
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return state.set('data', {}).set('success', false).set('loading', true);
    case CREATE_USER_SUCCESS:
      return state.set('data', action.payload).set('success', true).set('loading', false);
    case CREATE_USER_FAILED:
    default:
      return state;
  }
}

export default userReducer;
