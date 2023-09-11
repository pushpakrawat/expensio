import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
