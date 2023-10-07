import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

export default function OptionsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity onPress={() => console.log("User Options pressed")}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>User </Title>
              <Paragraph></Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => console.log("Expense Options pressed")}
        >
          <Card style={styles.card}>
            <Card.Content>
              <Title>Expense </Title>
              <Paragraph></Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity onPress={() => console.log("App Options pressed")}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>App </Title>
              <Paragraph></Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Device Options pressed")}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Device</Title>
              <Paragraph></Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: 'center',
  },
  card: {
    margin: 16,
    borderRadius: 4,
    minWidth: '45%',
    padding: 30,
  },
  row1: {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
  },
});
