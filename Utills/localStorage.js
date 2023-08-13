import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'expenses';

export const saveExpensesToLocalStorage = async (expenses) => {
  try {
    console.log('(Storage)Saving expenses to local storage:', expenses);
    const jsonExpenses = JSON.stringify(expenses);
    await AsyncStorage.setItem(STORAGE_KEY, jsonExpenses);
    console.log('(Storage)Expenses saved to local storage successfully', jsonExpenses);
  } catch (error) {
    console.error('Error saving expenses to local storage:', error);
  }
};

export const getExpensesFromLocalStorage = async () => {
  try {
    console.log('(Storage)Retrieving expenses from local storage');

    const jsonExpenses = await AsyncStorage.getItem(STORAGE_KEY);
    const parsedExpenses = jsonExpenses ? JSON.parse(jsonExpenses) : [];

    if (Array.isArray(parsedExpenses)) {
      console.log('(Storage)Expenses retrieved from local storage:', parsedExpenses);
      return parsedExpenses;
    } else {
      console.log('(Storage)Invalid data format in local storage. Returning empty array.');
      return [];
    }
  } catch (error) {
    console.error('Error retrieving expenses from local storage:', error);
    return [];
  }
};

