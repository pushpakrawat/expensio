import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useExpenseItemLogic } from './ExpenseItemCode';
import styles from './ExpenseItemStyle';
import MarkPaidButton from '../smallComponents/MarkPaidButton';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library and name as needed

const ExpenseItemStructure = ({ expense }) => {
  const { formattedDate, formattedDueDate } = useExpenseItemLogic(expense);
  const { id, title, amount, isRecurring } = expense;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>Amount: {amount}</Text>
      <Text style={styles.recurring}>
        {isRecurring ? 'Recurring' : 'Non-Recurring'}
      </Text>
      <Text style={styles.date}>Created on: {formattedDate}</Text>
      <Text>Due date: {formattedDueDate}</Text>
      <MarkPaidButton expense={expense}/>

      
      <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit pressed')}>
        <Icon name="pencil" size={20} color="black" />
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseItemStructure;
