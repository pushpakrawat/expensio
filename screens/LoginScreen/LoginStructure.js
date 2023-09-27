import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../redux/actions/userActions"; // Define Redux actions
import styles from "./LoginStyle"; // Import the styles
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { loginUser } from "./LoginCode";

export const LoginStructure = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = () => {
    // Dispatch the login action with email and password
    dispatch(loginUser(email, password, navigation, dispatch)); // Pass navigation to loginUser
  };

  const navigateToRegistration = () => {
    // Navigate to the registration screen
    navigation.navigate("Registration");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/expensio-logo.png")} 
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => dispatch(setEmail(text))}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => dispatch(setPassword(text))}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToRegistration} style={styles.registerLink}>
        <Text style={styles.registerLink}>
          Not registered yet? Register here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
