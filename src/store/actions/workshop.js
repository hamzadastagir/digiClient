import axios from 'axios';

import {
  CREATE_WORKSHOP_REQUEST,
  CREATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_FAILED,
} from '../constants';

export function createWorkshop() {
  return dispatch => {
    dispatch({
      type: CREATE_WORKSHOP_REQUEST,
    });

    axios
      .get('/api/workshops/new')
      .then(res =>
        dispatch({
          type: CREATE_WORKSHOP_SUCCESS,
          payload: res.data
        })
      )
      .catch(error =>
        dispatch({
          type: CREATE_WORKSHOP_FAILED,
          payload: error.message
        })
      );
  };
}
