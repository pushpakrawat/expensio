import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import HomeStructure from "../screens/HomeScreen/HomeStructure";
import AddExpenseStructure from "../screens/AddExpenseScreen/AddExpenseStructure";
import { LoginStructure } from '../screens/LoginScreen/LoginStructure'; // Import the Login screen
import { RegistrationStructure } from '../screens/RegistrationScreen/RegistrationStructure'; // Import the Registration screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isRegistered = useSelector((state) => state.user.isRegistered);

  useEffect(() => {
  
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isRegistered ? "Loading" : "Login"}>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeStructure}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddExpense" component={AddExpenseStructure} />
        <Stack.Screen
          name="Login"
          component={LoginStructure}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationStructure}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
