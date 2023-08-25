import React from "react";
import { View, Text, TextInput, Switch, TouchableOpacity, Button, ScrollView } from "react-native"; // Import ScrollView
import styles from "./AddExpenseStyle";
import { useAddExpenseLogic } from "./AddExpenseCode";
import { useDispatch, useSelector } from "react-redux";
import { setIsRecurring } from "../../redux/actions/expenseActions";
import NonRecurringExpenseStructure from "../../components/NonRecurringExpense/NonRecurringExpenseStructure";
import RecurringExpenseStructure from "../../components/RecurringExpense/RecurringExpenseStructure";

const AddExpenseStructure = () => {
  const dispatch = useDispatch();
  const isRecurring = useSelector(state => state.expense.isRecurring);
  const {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    title,
    amount,
  } = useAddExpenseLogic();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}> 
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
          <View style={styles.buttonWrapper}>
            <Button
              color="#42b3f5"
              style={styles.button}
              title="Recurring"
              onPress={() => dispatch(setIsRecurring(true))}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              color="#42b3f5"
              style={styles.button}
              title="One Time"
              onPress={() => dispatch(setIsRecurring(false))}
            />
          </View>
        </View>

        {isRecurring ? <RecurringExpenseStructure /> : <NonRecurringExpenseStructure />}

        <View style={styles.submitButtonWrapper}>
          <Button
            color="#f5d442"
            title="Submit"
            onPress={() => handleAddExpense()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddExpenseStructure;
