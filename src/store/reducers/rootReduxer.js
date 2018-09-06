import { combineReducers } from 'redux';
import workshopReducer from './workshopReducer';
import userReducer from './userReducer';

export default combineReducers({
  workshop: workshopReducer,
  user: userReducer,
});
