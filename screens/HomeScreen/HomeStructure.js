import React from 'react';
import { View } from 'react-native';
import MonthYearSelectorStructure from '../../components/MonthYearSelector/MonthYearSelectorStructure';
import AddExpenseButtonStructure from '../../components/AddExpenseButton/AddExpenseButtonStructure';
import ExpenseListStructure from '../../components/ExpenseList/ExpenseListStructure';
import ExpenseSummary from '../../components/smallComponents/ExpenseSummary';
import styles from './HomeStyle';
import HomeCode from './HomeCode';

const HomeStructure = () => {
  
  return (
    <View style={styles.container}>
      <MonthYearSelectorStructure />
      <ExpenseSummary />
      <ExpenseListStructure />
      <AddExpenseButtonStructure />
    </View>
  );
};

export default HomeStructure;
