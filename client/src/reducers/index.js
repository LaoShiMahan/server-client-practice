import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import message from './serverReducer';

const rootReducer = combineReducers({
  form,
  message
});

export default rootReducer;