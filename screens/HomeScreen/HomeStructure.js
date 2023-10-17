import React, { useEffect } from "react";
import { View, ScrollView, FlatList } from "react-native";
import MonthYearSelectorStructure from "../../components/MonthYearSelector/MonthYearSelectorStructure";
import ExpenseListStructure from "../../components/ExpenseList/ExpenseListStructure";
import ExpenseSummary from "../../components/smallComponents/ExpenseSummary";
import styles from "./HomeStyle";
import { BackHandler } from "react-native";
import HSgraph from "../../components/smallComponents/HSgraph";

const HomeStructure = () => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp(); // Close the app when the back button is pressed
      return true; // Prevent default behavior (exit the current screen)
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener when the component unmounts
  }, []);

  
  const data = [
    { key: 'HSgraph', component: <HSgraph /> },
    { key: 'MonthYearSelector', component: <MonthYearSelectorStructure /> },
    { key: 'ExpenseSummary', component: <ExpenseSummary /> },
    { key: 'ExpenseList', component: <ExpenseListStructure /> },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => item.component}
      keyExtractor={(item) => item.key}
    />
  );
}

export default HomeStructure;
