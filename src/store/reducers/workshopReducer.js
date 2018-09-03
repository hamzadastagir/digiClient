import { fromJS } from 'immutable';

import {
  CREATE_WORKSHOP_REQUEST,
  CREATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_FAILED,
} from '../constants';

// The initial state of the App
export const initialState = fromJS({
  workshop: {},
  success: false,
  loading: false
});

function workshopReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_WORKSHOP_REQUEST:
      return state.set('workshop', {}).set('success', false).set('loading', true);
    case CREATE_WORKSHOP_SUCCESS:
      return state.set('workshop', action.payload).set('success', true).set('loading', false);
    case CREATE_WORKSHOP_FAILED:
      return state.set(initialState);
    default:
      return state;
  }
}

export default workshopReducer;