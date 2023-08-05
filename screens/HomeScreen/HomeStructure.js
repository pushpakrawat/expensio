import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MonthYearSelectorStructure from '../../components/MonthYearSelector/MonthYearSelectorStructure'; // Adjust the path as needed
import AddExpenseButtonStructure from '../../components/AddExpenseButton/AddExpenseButtonStructure'
import styles from './HomeStyle';

const HomeStructure = ({ expenses }) => {
  return (
    <View style={styles.container}>
      
      <MonthYearSelectorStructure /> 
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <Text>{item.title} - {item.amount}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <AddExpenseButtonStructure/>
    </View>
  );
};

export default HomeStructure;
