import axios from 'axios';

import {
  CREATE_WORKSHOP_REQUEST,
  CREATE_WORKSHOP_SUCCESS,
  CREATE_WORKSHOP_FAILED,
} from '../constants';

// Get current profile
export const createWorkshop = () => dispatch => {
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

// // Get profile by handle
// export const getProfileByHandle = handle => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get(`/api/profile/handle/${handle}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: null
//       })
//     );
// };
//
// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
//
// // Add experience
// export const addExperience = (expData, history) => dispatch => {
//   axios
//     .post('/api/profile/experience', expData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
