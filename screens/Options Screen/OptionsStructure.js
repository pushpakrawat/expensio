import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

export default function OptionsScreen() {
  return (
    <ImageBackground
      source={require("../../assets/optionsBackground.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity onPress={() => console.log("User Options pressed")}>
            <ImageBackground
              source={require("../../assets/optionsIcons/user.png")}
              style={styles.card}
              imageStyle={styles.imageStyle}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Expense Options pressed")}
          >
            <ImageBackground
              source={require("../../assets/optionsIcons/expense.png")}
              style={styles.card}
              imageStyle={styles.imageStyle}
            ></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.row2}>
          <TouchableOpacity onPress={() => console.log("App Options pressed")}>
            <ImageBackground
              source={require("../../assets/optionsIcons/app.png")}
              style={styles.card}
              imageStyle={styles.imageStyle}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Device Options pressed")}
          >
            <ImageBackground
              source={require("../../assets/optionsIcons/device.png")}
              style={styles.card}
              imageStyle={styles.imageStyle}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // You can adjust the resizeMode as needed
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 16,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    borderRadius: 20,
  },
  row1: {
    flexDirection: "row",
  },
  row2: {
    flexDirection: "row",
  },
  heading: {
    fontSize: 20,
  },
  imageTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
