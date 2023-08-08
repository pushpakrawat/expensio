import React from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAddExpenseLogic } from './AddExpenseCode';
import NonRecurringExpense from '../../components/NonRecurringExpense/NonRecurringExpenseStructure';
import styles from './AddExpenseStyle';

const AddExpenseStructure = () => {
  const dispatch = useDispatch();
  const {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleToggleRecurring,
    handleToggleNonRecurring,
    title,
    amount,
    isRecurring
  } = useAddExpenseLogic(dispatch);

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

      {!isRecurring && <NonRecurringExpense />}

      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseStructure;
