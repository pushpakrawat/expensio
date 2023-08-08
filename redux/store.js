import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'; // Use the root reducer
import { saveExpensesToLocalStorage } from '../Utills/localStorage'; // Adjust the import path

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const expenses = store.getState().expense.expenses;
  saveExpensesToLocalStorage(expenses);
});

export default store;
