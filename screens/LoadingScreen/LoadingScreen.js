import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDataLoaded } from '../../redux/actions/expenseActions';
import { useNavigation } from '@react-navigation/native';
import { getExpenses } from '../../redux/actions/expenseActions';
import { getExpensesFromFirestore } from '../../firebaseUtils';
import { onSnapshot, collection } from 'firebase/firestore';
import { FIREBASE_DB } from '../../firebaseconfig';

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      // Fetch initial data
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
      if (expensesData !== null && expensesData !== undefined && expensesData !== false) {
        navigation.replace('Home');
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
      // Handle errors here
    }
  };

  // Use useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();

    // Set up a real-time listener for Firestore data updates
    const unsubscribe = onSnapshot(collection(FIREBASE_DB, 'expenses'), (querySnapshot) => {
      const updatedExpenses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        date: new Date(doc.data().date.seconds * 1000), // Convert Firestore Timestamp to JavaScript Date
        expenseEndDate: doc.data().expenseEndDate
          ? new Date(doc.data().expenseEndDate.seconds * 1000)
          : null, // Convert Firestore Timestamp to JavaScript Date, or null if it's empty
      }));

      // Dispatch an action to update the Redux store with the updated data
      dispatch(getExpenses(updatedExpenses));

      console.log('Updated Expenses:', updatedExpenses);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
