import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import AddExpenseButtonCode from './AddExpenseButtonCode'; // Import logic
import styles from './AddExpenseButtonStyle'; // Import style
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icons

const AddExpenseButtonStructure = () => {
  const { handlePress } = AddExpenseButtonCode();

  return (
    <View style={styles.addExpenseButtonContainer}>
      <TouchableOpacity style={styles.addExpenseButton} onPress={handlePress}>
        <Text style={styles.addExpenseButtonText}>Add Expense</Text>
        <AntDesign name="plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseButtonStructure;
