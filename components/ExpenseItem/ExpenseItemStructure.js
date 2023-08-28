import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { useExpenseItemLogic } from './ExpenseItemCode';
import styles from './ExpenseItemStyle';
import MarkPaidButton from '../smallComponents/MarkPaidButton';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library and name as needed
import { removeExpense } from '../../redux/actions/expenseActions';

const ExpenseItemStructure = ({ expense }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { formattedDate, formattedDueDate } = useExpenseItemLogic(expense);
  const { id, title, amount, isRecurring } = expense;

  
  // const handleEditPress = () => {
  //   navigation.navigate('EditExpense', { expense });
  // };



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

      <TouchableOpacity style={styles.deleteButton} onPress={()=> dispatch(removeExpense(expense.id))}>
        <Icon name="trash" size={26} color="black" />
      </TouchableOpacity>
      
      {/* <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit pressed')}>
        <Icon name="pencil" size={20} color="black" />
        <Text>Edit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ExpenseItemStructure;
