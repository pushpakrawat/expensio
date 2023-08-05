import { combineReducers } from 'redux';
import expenseReducer from './reducers/expenseReducer'; // Adjust the import path

const rootReducer = combineReducers({
  expense: expenseReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
