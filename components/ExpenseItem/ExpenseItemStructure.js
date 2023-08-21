import React from 'react';
import { View, Text } from 'react-native';
import { useExpenseItemLogic } from './ExpenseItemCode';
import styles from './ExpenseItemStyle'; // Make sure to import your styles

const ExpenseItemStructure = ({ expense }) => {
  const { title, amount, isRecurring, formattedDate, formattedDueDate } = useExpenseItemLogic(expense);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>Amount: {amount}</Text>
      <Text style={styles.recurring}>
        {isRecurring ? 'Recurring' : 'Non-Recurring'}
      </Text>
      <Text style={styles.date}>Created on: {formattedDate}</Text>
      <Text>Due date: {formattedDueDate}</Text>
    </View>
  );
};

export default ExpenseItemStructure;
