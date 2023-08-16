import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {retrieveExpensesFromStorage} from '../../Utills/storage'
import { addExpense } from '../../redux/actions/expenseActions';

export default function HomeCode() {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchExpenses = async () => {
          try {
            const savedExpenses = await retrieveExpensesFromStorage();
            console.log('Fetched expenses:', savedExpenses);        
            dispatch(addExpense(savedExpenses));
          } catch (error) {
            console.error('Error fetching expenses:', error);
          }
        };
        fetchExpenses();
      }, []);

  return null
}
