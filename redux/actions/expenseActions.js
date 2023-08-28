import { SET_YEARLY_MONTH, SET_MONTHLY_DATE, SET_CURRENT_MONTH_NAME, SET_CURRENT_MONTH, SET_CURRENT_YEAR, ADD_EXPENSE, SET_TITLE, SET_AMOUNT, SET_IS_RECURRING, SET_EXPENSE_DATE, CLEAR_FIELDS, SELECT_FREQUENCY,SET_SELECTED_YEAR, ADD_PAID_MONTH, REMOVE_PAID_MONTH } from '../actionTypes'; // Adjust the import path based on your folder structure

export const setYearlyMonth = (monthIndex) => ({
  type: SET_YEARLY_MONTH,
  payload: monthIndex,
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

export const setExpenseDate = (date) => {
  return {
    type: SET_EXPENSE_DATE,
    payload: date,
  };
};
export const setMonthlyDate = (date) => ({
  type: SET_MONTHLY_DATE,
  payload: date,
});

export const setSelectedYear = (year) => ({
  type: SET_SELECTED_YEAR,
  payload: year,
});

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

export const addPaidMonth = ({expenseId, month, year}) => {
  return {
    type: ADD_PAID_MONTH,
    payload: { expenseId, month, year },
  };
};

export const removePaidMonth = ({expenseId, month, year}) => {
  return {
    type: REMOVE_PAID_MONTH,
    payload: { expenseId, month, year },
  };
};

