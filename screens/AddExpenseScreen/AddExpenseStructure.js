import React from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; // Import navigation functions
import {
  useAddExpenseLogic,
  clearFields, // Import a new action creator to clear fields
} from './AddExpenseCode';
import NonRecurringExpense from '../../components/NonRecurringExpense/NonRecurringExpenseStructure';
import styles from './AddExpenseStyle';
import RecurringExpenseStructure from '../../components/RecurringExpense/RecurringExpenseStructure';

const AddExpenseStructure = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize navigation

  // Destructure values and functions from the logic hook
  const {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleToggleRecurring,
    handleToggleNonRecurring,
    title,
    amount,
    isRecurring,
  } = useAddExpenseLogic(dispatch, navigation);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={handleTitleChange}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        onChangeText={handleAmountChange}
        value={amount}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Recurring</Text>
        <Switch value={isRecurring} onValueChange={handleToggleNonRecurring} />
      </View>

      {/* Conditional rendering based on isRecurring */}
      {isRecurring ? (
        <RecurringExpenseStructure /> // Render RecurringExpenseStructure when isRecurring is true
      ) : (
        <NonRecurringExpense /> // Otherwise, render NonRecurringExpense
      )}

      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseStructure;
