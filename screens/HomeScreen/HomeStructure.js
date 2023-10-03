import React, { useEffect } from 'react';
import { View } from 'react-native';
import MonthYearSelectorStructure from '../../components/MonthYearSelector/MonthYearSelectorStructure';
import ExpenseListStructure from '../../components/ExpenseList/ExpenseListStructure';
import ExpenseSummary from '../../components/smallComponents/ExpenseSummary';
import styles from './HomeStyle';
import HomeCode from './HomeCode';
import { BackHandler } from 'react-native';

const HomeStructure = () => {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp(); // Close the app when the back button is pressed
      return true; // Prevent default behavior (exit the current screen)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener when the component unmounts
  }, []);

  return (
    <View style={styles.container}>
      <MonthYearSelectorStructure />
      <ExpenseSummary />
      <ExpenseListStructure />
      {/* <AddExpenseButtonStructure /> */}
    </View>
  );
};

export default HomeStructure;
