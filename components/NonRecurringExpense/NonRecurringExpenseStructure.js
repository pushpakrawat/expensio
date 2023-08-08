import React from 'react';
import { View, Text } from 'react-native';
import NonRecurringExpenseCode from './NonRecurringExpenseCode'; // Import the logic file
import styles from './NonRecurringExpenseStyle'; // Import the style

const NonRecurringExpenseStructure = ({ selectedDate, handleDateChange }) => {
  return (
    <View style={styles.container}>
      <NonRecurringExpenseCode selectedDate={selectedDate} handleDateChange={handleDateChange} />
    </View>
  );
};

export default NonRecurringExpenseStructure;
