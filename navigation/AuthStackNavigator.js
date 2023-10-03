import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStructure from '../screens/LoginScreen/LoginStructure'
import RegistrationStructure from "../screens/RegistrationScreen/RegistrationStructure";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
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
    <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default AuthStackNavigator;
