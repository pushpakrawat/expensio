import React, {useEffect} from 'react';
import { Provider, useDispatch } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store'; 
import { fetchExpenses } from './redux/actions/expenseActions';


const App = () => {
  useEffect(() => {
    // Fetch expenses from Firestore when the app starts
    store.dispatch(fetchExpenses()); // Use store.dispatch here
    
  }, []);

  return (
    <Provider store={store}>
      
      <AppNavigator />
      
    </Provider>
  );
};

export default App;
