import React from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenseActions';
import { useAddExpenseLogic } from './AddExpenseCode'; // Import the logic

import styles from './AddExpenseStyle';

const AddExpenseStructure = () => {
  const dispatch = useDispatch();
  const { handleAddExpense } = useAddExpenseLogic(dispatch);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Recurring</Text>
        <Switch value={false} onValueChange={() => {}} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddExpense('Sample Expense', '50', false)}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseStructure;
