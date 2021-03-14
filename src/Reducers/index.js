import { combineReducers } from 'redux';
//import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import questions from './question';
import authedUser from './authorization';

export default combineReducers({
  	users,
  	questions,
  	authedUser,
	//loadingBar: loadingBarReducer
});