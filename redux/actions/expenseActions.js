import { SET_CURRENT_MONTH_NAME, SET_INITIAL_EXPENSES, SET_CURRENT_MONTH, SET_CURRENT_YEAR, ADD_EXPENSE, SET_TITLE, SET_AMOUNT, SET_IS_RECURRING, SET_IS_ENDING, SET_EXPENSE_DATE, CLEAR_FIELDS, SELECT_FREQUENCY, } from '../actionTypes'; // Adjust the import path based on your folder structure

export const setInitialExpenses = (expenses) => ({
  type: SET_INITIAL_EXPENSES,
  payload: expenses,
});

export const setCurrentMonthName = (monthName) => {
  return {
    type: SET_CURRENT_MONTH_NAME,
    payload: monthName,
  };
};
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

export const setIsEnding = (isEnding) => ({
  type: SET_IS_ENDING,
  payload: isEnding,
});

export const setExpenseDate = (date) => {
  return {
    type: SET_EXPENSE_DATE,
    payload: date,
  };
};

export const saveExpensesLocally = (expenses) => ({
  type: 'SAVE_EXPENSES_LOCALLY',
  payload: expenses,
});

export const selectFrequency = (frequency) => ({
  type: SELECT_FREQUENCY,
  payload: frequency,
});

export const addExpense = (newExpense) => {
  return {
    type: ADD_EXPENSE,
    payload: newExpense,
  };
};

export const clearFields = () => {
  return {
    type: CLEAR_FIELDS,
  };
};

