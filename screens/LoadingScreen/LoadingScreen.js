// LoadingScreen.js
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getExpensesFromFirestore } from '../../firebaseUtils'; // Import the data fetching function

const LoadingScreen = ({ navigation }) => {
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data using Redux action
        await getExpensesFromFirestore();
        
        // Navigate to your main app screen when data is fetched
        navigation.replace('MainAppScreen'); // Replace with your actual screen name
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle errors here, e.g., show an error message or retry fetching
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
