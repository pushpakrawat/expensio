import React from 'react';
import { View, FlatList } from 'react-native';
import useExpenseListLogic from './ExpenseListCode'; // Import the logic file
import ExpenseItemStructure from '../ExpenseItem/ExpenseItemStructure'; // Import the expense item component
import styles from './ExpenseListStyle';

const ExpenseListStructure = () => {
  const filteredExpenses = useExpenseListLogic();

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredExpenses}
        keyExtractor={(expense, index) => index.toString()} // Change to use a unique key if available
        renderItem={({ item }) => (
          <ExpenseItemStructure expense={item} />
        )}
      />
    </View>
  );
};

export default ExpenseListStructure;
