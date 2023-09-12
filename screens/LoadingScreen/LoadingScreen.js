import React, { useEffect, useFocusEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDataLoaded } from '../../redux/actions/expenseActions';
import { useNavigation } from '@react-navigation/native';
import { getExpenses } from '../../redux/actions/expenseActions';
import { getExpensesFromFirestore } from '../../firebaseUtils';

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

    const fetchData = async () => {
      try {        
          const expensesData = await getExpensesFromFirestore();          
          const expenses = expensesData.map((expense) => ({
            ...expense,
            date: new Date(expense.date.seconds * 1000),
            expenseEndDate: expense.expenseEndDate
              ? new Date(expense.expenseEndDate.seconds * 1000)
              : null,
          }));
          
          dispatch(getExpenses(expenses));
          
          navigation.replace('Home');      
        
      } catch (error) {
        console.error('Error fetching data: ', error);        
      }
    };



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Loading your expenses...</Text>
    </View>
  );
};

export default LoadingScreen;
