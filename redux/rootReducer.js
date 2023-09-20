import { combineReducers } from 'redux';
import expenseReducer from './reducers/expenseReducer'; 
import userReducer from './reducers/userReducer'

const rootReducer = combineReducers({
  expense: expenseReducer,
  user: userReducer,
});

export default rootReducer;
