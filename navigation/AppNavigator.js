import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import HomeStructure from "../screens/HomeScreen/HomeStructure";
import AddExpenseStructure from "../screens/AddExpenseScreen/AddExpenseStructure";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
