import axios from 'axios';
import {
  CREATE_WORKSHOP_REQUEST,
  CREATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_FAILED,
  GET_WORKSHOP_REQUEST,
  GET_WORKSHOP_SUCCESS,
  GET_WORKSHOP_FAILED
} from '../constants';
import {baseApiUrl} from "../../utils/constants";

export function createWorkshop(body) {
  return dispatch => {
    dispatch({
      type: CREATE_WORKSHOP_REQUEST,
    });
    fetch(`${baseApiUrl}/api/workshops/new`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body),
    }).then(res => {
      dispatch({
        type: CREATE_WORKSHOP_SUCCESS,
        payload: res.data
      });
    }).catch(() => {
      dispatch({
        type: CREATE_WORKSHOP_FAILED,
      });
    });
  };
}

export  function fetchWorkshops() {
  return dispatch => {
    dispatch({
      type: GET_WORKSHOP_REQUEST
    });
    axios(`${baseApiUrl}/api/workshops`, {
      method: 'GET',
      headers: {
        'Accepts': 'application/json'
      }
    }).then(res => {
      dispatch({
        type: GET_WORKSHOP_SUCCESS,
        payload: res.data.result[0]
      });
    }).catch(() => {
      dispatch({
        type: GET_WORKSHOP_FAILED,

      });
    });
  };
}

export default {
  createWorkshop,
  fetchWorkshops
};
