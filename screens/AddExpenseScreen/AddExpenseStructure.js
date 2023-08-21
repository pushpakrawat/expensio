import React from "react";
import { View, Text, TextInput, Switch, TouchableOpacity, Button } from "react-native";
import styles from "./AddExpenseStyle";
import { useAddExpenseLogic } from "./AddExpenseCode"; // Remove unnecessary import
import { useDispatch, useSelector } from "react-redux";
import { setIsRecurring } from "../../redux/actions/expenseActions";
import NonRecurringExpenseStructure from "../../components/NonRecurringExpense/NonRecurringExpenseStructure";
import RecurringExpenseStructure from "../../components/RecurringExpense/RecurringExpenseStructure";

const AddExpenseStructure = () => {
  const dispatch = useDispatch();
  const isRecurring = useSelector(state => state.expense.isRecurring);
  // Destructure values and functions from the logic hook
  const {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    title,
    amount,
  } = useAddExpenseLogic(); // Remove unnecessary argument

  const handleIsCustom = (option) => {
    dispatch(setIsCustom(option));
  };

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

      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Recurring" onPress={()=> dispatch(setIsRecurring(true))} />
        <Button style={styles.button} title="One Time" onPress={()=> dispatch(setIsRecurring(false))} />
        
      </View>

      {isRecurring ? ( < RecurringExpenseStructure />) : ( <NonRecurringExpenseStructure /> )}

      <Button style={styles.button} title="Submit" onPress={()=> handleAddExpense()} />

    </View>
  );
};

export default AddExpenseStructure;
