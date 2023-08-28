import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStructure from '../screens/HomeScreen/HomeStructure';
import AddExpenseStructure from '../screens/AddExpenseScreen/AddExpenseStructure';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeStructure}
      options={{ headerShown: false }} // Hide the header on the Home screen
    />
    <Stack.Screen name="AddExpense" component={AddExpenseStructure} />
    {/* <Stack.Screen name="EditExpense" component={EditExpenseScreen} /> */}
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
