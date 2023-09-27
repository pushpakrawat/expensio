import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../redux/actions/userActions";
import { registerUser } from "./RegistrationCode";
import { useNavigation } from "@react-navigation/native";
import styles from "./RegistrationStyle"; // Import the styles
import { Formik } from "formik";
import { registrationSchema } from "../../src/validation/validationSchemas"; // Import the registration schema

export const RegistrationStructure = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleRegistration = (values) => {
    const { email, password } = values;
    dispatch(registerUser(email, password, navigation, dispatch));
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={registrationSchema} // Use the registration schema
      onSubmit={handleRegistration}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
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
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToLogin} style={styles.loginLink}>
            <Text style={styles.loginLink}>Already registered? Login here</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
