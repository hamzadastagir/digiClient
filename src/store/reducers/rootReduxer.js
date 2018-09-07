import { combineReducers } from 'redux';
import workshopReducer from './workshopReducer';
import userReducer from './userReducer';
import genreReducer from './genreReducer';

export default combineReducers({
  workshop: workshopReducer,
  user: userReducer,
  genre: genreReducer,
});
