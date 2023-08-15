import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store'; 
import { clearStorage } from './Utills/storage';


const App = () => {
  return (
    <Provider store={store}>
      {/* { clearStorage()} */}
      <AppNavigator />
    </Provider>
  );
};

export default App;
