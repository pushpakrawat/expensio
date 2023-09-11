import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDataLoaded } from '../../redux/actions/expenseActions';
import { getExpensesFromFirestore } from '../../firebaseUtils';
import { useNavigation } from '@react-navigation/native';
import { getExpenses } from '../../redux/actions/expenseActions';

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isDataLoaded = useSelector((state) => state.expense.isDataLoaded);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expensesData = await getExpensesFromFirestore();
        // Convert date and expenseEndDate fields to JavaScript Date objects
        const expenses = expensesData.map((expense) => ({
          ...expense,
          date: new Date(expense.date.seconds * 1000), // Convert Firestore Timestamp to JavaScript Date
          expenseEndDate: expense.expenseEndDate
            ? new Date(expense.expenseEndDate.seconds * 1000)
            : null, // Convert Firestore Timestamp to JavaScript Date, or null if it's empty
        }));

        // Dispatch the GET_EXPENSES action to update the Redux store with the fetched data
        dispatch(getExpenses(expenses));
        dispatch(setDataLoaded(true));

        // Check if data is loaded, then navigate to 'Home' screen
        if (expenses.length > 0) {
          navigation.replace('Home');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here
      }
    };

    fetchData();
  }, [dispatch, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
