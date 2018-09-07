import axios from 'axios';
import {
  CREATE_GENRE_REQUEST,
  CREATE_GENRE_SUCCESS,
  CREATE_GENRE_FAILED
} from '../constants';
import {baseApiUrl} from "../../utils/constants";

export function createGenre(body) {
  return dispatch => {
    dispatch({
      type: CREATE_GENRE_REQUEST,
    });
    fetch(`${baseApiUrl}/api/genres/new`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body),
    }).then(res => {
      dispatch({
        type: CREATE_GENRE_SUCCESS,
        payload: res.data
      });
    }).catch(() => {
      dispatch({
        type: CREATE_GENRE_FAILED,
      });
    });
  };
}

// export  function fetchWorkshops() {
//   return dispatch => {
//     dispatch({
//       type: GET_WORKSHOP_REQUEST
//     });
//     axios(`${baseApiUrl}/api/workshops`, {
//       method: 'GET',
//       headers: {
//         'Accepts': 'application/json'
//       }
//     }).then(res => {
//       dispatch({
//         type: GET_WORKSHOP_SUCCESS,
//         payload: res.data.result[0]
//       });
//     }).catch(() => {
//       dispatch({
//         type: GET_WORKSHOP_FAILED,
//
//       });
//     });
//   };
// }

export default {
  createGenre,
};
