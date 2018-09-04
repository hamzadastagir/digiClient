import {
  CREATE_WORKSHOP_REQUEST,
  CREATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_FAILED,
} from '../constants';
import {baseApiUrl} from "../../utils/constants";

export function createWorkshop(body) {
  return dispatch => {
    dispatch({
      type: CREATE_WORKSHOP_REQUEST,
    });
    fetch(`${baseApiUrl}/api/workshops/new`,{
        method: 'POST',
        body: body,
      }
    )
      .then(res => {
        dispatch({
          type: CREATE_WORKSHOP_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: CREATE_WORKSHOP_FAILED,
          payload: error.message
        });
      });
  };
}

export default {
  createWorkshop,
};
