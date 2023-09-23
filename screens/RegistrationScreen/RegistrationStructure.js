import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPassword,
} from "../../redux/actions/userActions";
import { registerUser } from "./RegistrationCode";
import { useNavigation } from "@react-navigation/native";
import { signInWithGooglePopup } from '../../firebaseconfig'
import styles from "./RegistrationStyle"; // Import the styles

export const RegistrationStructure = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleRegistration = () => {
    dispatch(registerUser(email, password, navigation));
  };

  const navigateToLogin = () => {
    // Navigate to the registration screen
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/expensio-logo.png")} style={styles.logo} />
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
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToLogin} style={styles.loginLink}>
        <Text style={styles.loginLink}>
          Already registered? Login here
        </Text>
      </TouchableOpacity>
      {/* <Button title="Sign up with Google" onPress={signInWithGooglePopup} /> */}

    </View>
  );
};
