import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStructure from "../screens/HomeScreen/HomeStructure";
import AddExpenseStructure from "../screens/AddExpenseScreen/AddExpenseStructure";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const HomeIcon = () => <Icon name="home" size={24} color="black" />;

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Loading">
    <Tab.Screen
      name="Loading"
      component={LoadingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity>
            <HomeIcon />
          </TouchableOpacity>
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeStructure}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity>
            <HomeIcon />
          </TouchableOpacity>
        ),
      }}
    />
    <Tab.Screen
      name="AddExpense"
      component={AddExpenseStructure}
      options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity>
            <HomeIcon />
          </TouchableOpacity>
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
