import { fromJS } from 'immutable';

import {
  CREATE_WORKSHOP_REQUEST,
  CREATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_FAILED,
  GET_WORKSHOP_REQUEST,
  GET_WORKSHOP_SUCCESS,
  GET_WORKSHOP_FAILED,
  DELETE_WORKSHOP_REQUEST,
  DELETE_WORKSHOP_SUCCESS,
  DELETE_WORKSHOP_FAILED,
} from '../constants';

// The initial state of the App
export const initialState = fromJS({
  data: [],
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
    case GET_WORKSHOP_REQUEST:
      return state.set('data', []).set('success', false).set('loading', true);
    case GET_WORKSHOP_SUCCESS:
      return state.set('data', action.payload).set('success', true).set('loading', false);
    case GET_WORKSHOP_FAILED:
      return state.set(initialState);
    case DELETE_WORKSHOP_REQUEST:
      return state.set('success', false).set('loading', true);
    case DELETE_WORKSHOP_SUCCESS: {
      const id = action.payload._id;
      return state.update('data', data => data.filter(value =>(value._id !== id))).set('loading', false);
    }
    case DELETE_WORKSHOP_FAILED:
      return state.set(initialState);
    default:
      return state;
  }
}

export default workshopReducer;
