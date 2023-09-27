import React, { useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setUserId } from "../../redux/actions/userActions"; // Define Redux actions
import styles from "./LoginStyle"; // Import the styles
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import { loginUser } from "./LoginCode";
import { FIREBASE_AUTH } from "../../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { setExpenseDocId } from "../../redux/actions/expenseActions";
import { Formik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "../../src/validation/validationSchemas";

export const LoginStructure = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const navigation = useNavigation(); // Initialize navigation

  const handleLogin = (values) => {
    const { email, password } = values;
    dispatch(loginUser(email, password, navigation, dispatch)); // Pass navigation to loginUser
  };

  const navigateToRegistration = () => {
    // Navigate to the registration screen
    navigation.navigate("Registration");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        dispatch(setUserId(user.uid));
        dispatch(setExpenseDocId(user.uid));
        navigation.navigate("Loading");
      }
    });

    // Remember to unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [dispatch, navigation]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Image
            source={require("../../assets/expensio-logo.png")}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <View style={styles.errorContainer}>
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <View style={styles.errorContainer}>
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateToRegistration}
            style={styles.registerLink}
          >
            <Text style={styles.registerLink}>
              Not registered yet? Register here
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
