import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import TabNavigator from "./TabNavigator";
import AuthStackNavigator from "./AuthStackNavigator";

const AppNavigator = () => {
  const isRegistered = useSelector((state) => state.user.isRegistered);

  return (
    <NavigationContainer>
      {isRegistered ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
