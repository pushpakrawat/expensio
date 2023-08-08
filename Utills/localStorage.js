import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveExpensesToLocalStorage = async (expenses) => {
  try {
    console.log('Saving expenses to local storage:', expenses);
    const jsonExpenses = JSON.stringify(expenses);
    await AsyncStorage.setItem('expenses', jsonExpenses);
    console.log('Expenses saved to local storage successfully');
  } catch (error) {
    console.error('Error saving expenses to local storage:', error);
  }
};

export const getExpensesFromLocalStorage = async () => {
  try {
    console.log('Retrieving expenses from local storage');
    const jsonExpenses = await AsyncStorage.getItem('expenses');
    const parsedExpenses = jsonExpenses ? JSON.parse(jsonExpenses) : [];
    console.log('Expenses retrieved from local storage:', parsedExpenses);
    return parsedExpenses;
  } catch (error) {
    console.error('Error retrieving expenses from local storage:', error);
    return [];
  }
};

