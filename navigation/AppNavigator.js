import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreenCode from "../screens/LoadingScreen/LoadingScreen";
import HomeStructure from "../screens/HomeScreen/HomeStructure";
import AddExpenseStructure from "../screens/AddExpenseScreen/AddExpenseStructure";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const handleDataLoaded = () => {
    setDataLoaded(true);
  };

  return (
    <NavigationContainer>
      {isDataLoaded ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeStructure}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AddExpense" component={AddExpenseStructure} />
        </Stack.Navigator>
      ) : (
        <LoadingScreenCode onDataLoaded={handleDataLoaded} />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
