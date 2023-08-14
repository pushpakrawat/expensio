import React from 'react';
import { View, Text } from 'react-native';
import { useExpenseItemLogic } from './ExpenseItemCode'; // Import the logic component
import styles from './ExpenseItemStyle'; // Import the style
import { useSelector } from 'react-redux';

const ExpenseItemStructure = ({ expense }) => {
  const { title, amount, isRecurring, date, expenseDate } = useExpenseItemLogic(expense);

  // Format the dates to strings
  const formattedDate = date ? date.toLocaleDateString() : '';
  const formattedExpenseDates = expenseDate.map(d => d.toLocaleDateString()).join(', ');
  const currentMonth = useSelector(state => state.expense.currentMonth)-1;
  const currentYear = useSelector(state => state.expense.currentYear);

  const parseDateArray = (dates) => {
    return dates
      .map((dateString) => new Date(dateString))
      .filter((parsedDate) => parsedDate.getMonth() === currentMonth && parsedDate.getFullYear() === currentYear)
      .map((filteredDate) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return filteredDate.toLocaleDateString('en-US', options);
      });
  };

  const parsedDates = parseDateArray(expenseDate);

  return (
    <View style={styles.container}>
      {/* Display the expense item details using the extracted values */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>Amount: {amount}</Text>
      <Text style={styles.recurring}>
        {isRecurring ? 'Recurring' : 'Non-Recurring'}
      </Text>
      <Text style={styles.date}>Created on: {formattedDate}</Text>      
      <Text>Due date:</Text>
      {parsedDates.map((parsedDate, index) => (
        <Text key={index}>{parsedDate.toString()}</Text>
      ))}    
    </View>
  );
};

export default ExpenseItemStructure;
