import axios from 'axios';
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
} from '../constants';
import {baseApiUrl} from "../../utils/constants";

export function createUser(body, props) {
  return dispatch => {
    dispatch({
      type: CREATE_USER_REQUEST,
    });
    fetch(`${baseApiUrl}/api/users/new`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body),
    }).then(res => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: res.data
      });
      props.history.push('/dashboard')
    }).catch(() => {
      dispatch({
        type: CREATE_USER_FAILED,
      });
    });
  };
}
