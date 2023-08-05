import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store'; // Adjust the import path as needed

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
