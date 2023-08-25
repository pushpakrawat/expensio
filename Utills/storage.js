import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const STORAGE_KEY = 'expenses';

export const addExpensesToStorage = async (expenses) => {
    try {
        const jsonExpenses = JSON.stringify(expenses);
        await AsyncStorage.setItem(STORAGE_KEY, jsonExpenses);
        console.log('Expenses saved to storage:', jsonExpenses);
    } catch (error) {
        console.error('Error saving expenses to storage:', error);
    }
};

export const retrieveExpensesFromStorage = async () => {
    try {
        const jsonExpenses = await AsyncStorage.getItem(STORAGE_KEY);
        const parsedExpenses = jsonExpenses ? JSON.parse(jsonExpenses) : [];
        
        if (Array.isArray(parsedExpenses)) {
            console.log('Expenses retrieved from storage:', parsedExpenses);
            return parsedExpenses;
        } else {
            console.log('Invalid data format in storage. Returning empty array.');
            return [];
        }
    } catch (error) {
        console.error('Error retrieving expenses from storage:', error);
        return [];
    }
};

export const checkIfExpensesExistInStorage = async () => {
    try {
        const jsonExpenses = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonExpenses !== null;
    } catch (error) {
        console.error('Error checking expenses in storage:', error);
        return false;
    }
};

export const clearStorage = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
        console.log('Local storage cleared.');
    } catch (error) {
        console.error('Error clearing local storage:', error);
    }
};
