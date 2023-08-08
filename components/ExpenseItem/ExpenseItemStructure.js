import React from 'react';
import { View, Text } from 'react-native';
import { useExpenseItemLogic } from './ExpenseItemCode'; // Import the logic component
import styles from './ExpenseItemStyle'; // Import the style

const ExpenseItemStructure = ({ expense }) => {
  const { title, amount, isRecurring, date, selectedDateNR } = useExpenseItemLogic(expense);

  // Format the dates to strings
  const formattedDate = date.toLocaleDateString();
  const formattedSelectedDateNR = selectedDateNR ? selectedDateNR.toLocaleDateString() : '';

  return (
    <View style={styles.container}>
      {/* Display the expense item details using the extracted values */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>Amount: {amount}</Text>
      <Text style={styles.recurring}>
        {isRecurring ? 'Recurring' : 'Non-Recurring'}
      </Text>
      <Text style={styles.date}>Created on: {formattedDate}</Text>
      {selectedDateNR && (
        <Text style={styles.date}>Due on: {formattedSelectedDateNR}</Text>
      )}
    </View>
  );
};

export default ExpenseItemStructure;
