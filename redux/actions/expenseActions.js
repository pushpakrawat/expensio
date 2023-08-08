import { SET_CURRENT_MONTH, SET_CURRENT_YEAR, ADD_EXPENSE, SET_TITLE, SET_AMOUNT, SET_IS_RECURRING, SET_EXPENSE_DATE_NR, } from '../actionTypes'; // Adjust the import path based on your folder structure

export const setCurrentMonth = (month) => {
  return {
    type: SET_CURRENT_MONTH,
    payload: month,
  };
};

export const setCurrentYear = (year) => {
  return {
    type: SET_CURRENT_YEAR,
    payload: year,
  };
};

export const addExpense = (expense) => {
  const newExpense = {
    ...expense,
    date: new Date(), // Set the current date here
  };
  return {
    type: ADD_EXPENSE,
    payload: newExpense,
  };
};


export const setTitle = (title) => ({
  type: SET_TITLE,
  payload: title,
});

export const setAmount = (amount) => ({
  type: SET_AMOUNT,
  payload: amount,
});

export const setIsRecurring = (isRecurring) => ({
  type: SET_IS_RECURRING,
  payload: isRecurring,
});

export const setExpenseDateNR = (date) => {
  return {
    type: SET_EXPENSE_DATE_NR,
    payload: date,
  };
};
export const saveExpensesLocally = (expenses) => ({
  type: 'SAVE_EXPENSES_LOCALLY',
  payload: expenses,
});

