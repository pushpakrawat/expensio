import React from 'react';
import { View } from 'react-native';
import MonthYearSelectorStructure from '../../components/MonthYearSelector/MonthYearSelectorStructure';
import AddExpenseButtonStructure from '../../components/AddExpenseButton/AddExpenseButtonStructure';
import ExpenseListStructure from '../../components/ExpenseList/ExpenseListStructure';
import styles from './HomeStyle';
import HomeCode from './HomeCode';

const HomeStructure = () => {
  
  return (
    <View style={styles.container}>
      <MonthYearSelectorStructure />
      <ExpenseListStructure />
      <AddExpenseButtonStructure />
    </View>
  );
};

export default HomeStructure;
