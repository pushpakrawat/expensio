import React from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import styles from './AddExpenseStyle';
import { useAddExpenseLogic } from './AddExpenseCode'; // Remove unnecessary import
import NonRecurringExpenseStructure from '../../components/NonRecurringExpense/NonRecurringExpenseStructure';
import RecurringExpenseStructure from '../../components/RecurringExpense/RecurringExpenseStructure';

const AddExpenseStructure = () => {

  // Destructure values and functions from the logic hook
  const {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleToggleIsRecurring, // Update function name
    title,
    amount,
    isRecurring,
  } = useAddExpenseLogic(); // Remove unnecessary argument

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
        <Switch value={isRecurring} onValueChange={handleToggleIsRecurring} /> 
      </View>

      
      {isRecurring ? (
        <RecurringExpenseStructure />
      ) : (
        <NonRecurringExpenseStructure />
      )}

      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseStructure;
