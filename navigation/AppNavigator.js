import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStructure from '../screens/HomeScreen/HomeStructure';
import AddExpenseStructure from '../screens/AddExpenseScreen/AddExpenseStructure';
import ShowExpenseStructure from '../screens/ShowExpenseScreen/ShowExpenseStructure';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeStructure} />
    <Stack.Screen name="AddExpense" component={AddExpenseStructure} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
