import {
  SET_CURRENT_MONTH_NAME,
  SET_CURRENT_MONTH,
  SET_CURRENT_YEAR,
  ADD_EXPENSE,
  SET_TITLE,
  SET_AMOUNT,
  SET_IS_RECURRING,
  SET_IS_ENDING,
  SET_IS_CUSTOM,
  SET_YEARLY_MONTH,
  SET_SELECTED_YEAR,
  SET_EXPENSE_DATE,
  SET_MONTHLY_DATE,
  SELECT_FREQUENCY,
  ADD_PAID_MONTH,
  REMOVE_PAID_MONTH,
  REMOVE_EXPENSE,
} from "../actionTypes";

import {
  addExpensesToStorage,
  retrieveExpensesFromStorage,
} from "../../Utills/storage";

const currentDate = new Date();
const initialMonth = currentDate.getMonth() + 1;
const initialYear = currentDate.getFullYear();

const initialState = {
  currentMonthName: "",
  currentMonth: initialMonth,
  currentYear: initialYear,
  title: "",
  amount: "",
  isRecurring: null,
  selectedFrequency: "",
  selectedDate: "",
  selectedMonth: "",
  selectedYear: "",
  expenseEndDate: "",
  expenses: [],
  paidMonths: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH_NAME:
      // console.log("(REDUCER)SET_CURRENT_MONTH_NAME:", action.payload);
      return {
        ...state,
        currentMonthName: action.payload,
      };
    case SET_CURRENT_MONTH:
      // console.log("(REDUCER)SET_CURRENT_MONTH:", action.payload);
      return {
        ...state,
        currentMonth: action.payload,
      };

    case SET_CURRENT_YEAR:
      // console.log("(REDUCER)SET_CURRENT_YEAR:", action.payload);
      return {
        ...state,
        currentYear: action.payload,
      };

    case SET_TITLE:
      // console.log("(REDUCER)SET_TITLE:", action.payload);
      return {
        ...state,
        title: action.payload,
      };

    case SET_AMOUNT:
      // console.log("(REDUCER)SET_AMOUNT:", action.payload);
      return {
        ...state,
        amount: action.payload,
      };

    case SET_IS_RECURRING:
      console.log("(REDUCER)SET_IS_RECURRING:", action.payload);
      return {
        ...state,
        isRecurring: action.payload,
      };

    case SELECT_FREQUENCY:
      // console.log("(REDUCER)SELECT_FREQUENCY:", action.payload);
      return {
        ...state,
        selectedFrequency: action.payload,
      };
    case SET_MONTHLY_DATE:
      // console.log("(REDUCER)SET_MONTHLY_DATE:", action.payload);
      return {
        ...state,
        selectedDate: action.payload,
      };

    case SET_YEARLY_MONTH:
      // console.log("(REDUCER)SET_YEARLY_MONTH:", action.payload);
      return {
        ...state,
        selectedMonth: action.payload,
      };

    case SET_SELECTED_YEAR:
      // console.log("(REDUCER)SET_SELECTED_YEAR:", action.payload);
      return {
        ...state,
        selectedYear: action.payload,
      };

    case SET_EXPENSE_DATE:
      // console.log("(REDUCER)SET_EXPENSE_DATE:", action.payload);
      return {
        ...state,
        expenseEndDate: action.payload, // Create a new array instance
      };

    case ADD_EXPENSE:
      const newExpenses = [...state.expenses, action.payload];
      // addExpensesToStorage(newExpenses);
      // console.log(newExpenses);
      return {
        ...state,
        expenses: newExpenses,
      };

    case ADD_PAID_MONTH:
      // console.log("Action expenseId", action.payload.expenseId);
      // console.log("Action month", action.payload.month);
      // console.log("Action year", action.payload.year);
      const updatedExpensesAdd = state.expenses.map((expense) =>
        expense.id === action.payload.expenseId
          ? {
              ...expense,
              paidMonths: [
                ...expense.paidMonths,
                { month: action.payload.month, year: action.payload.year },
              ],
            }
          : expense
      );
      // console.log(
      //   "Updated expenses after ADD_PAID_MONTH:",
      //   JSON.stringify(updatedExpensesAdd, null, 2)
      // );

      return {
        ...state,
        expenses: updatedExpensesAdd,
      };

    case REMOVE_PAID_MONTH:
      // console.log("REMOVE_PAID_MONTH action dispatched.");
      const updatedExpensesRemove = state.expenses.map((expense) =>
        expense.id === action.payload.expenseId
          ? {
              ...expense,
              paidMonths: expense.paidMonths.filter(
                (item) =>
                  !(
                    item.month === action.payload.month &&
                    item.year === action.payload.year
                  )
              ),
            }
          : expense
      );
      // console.log(
      //   "Updated expenses after REMOVE_PAID_MONTH:",
      //   updatedExpensesRemove
      // );
      return {
        ...state,
        expenses: updatedExpensesRemove,
      };
    case REMOVE_EXPENSE:
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.expenseId
      );
      return {
        ...state,
        expenses: updatedExpenses,
      };

    default:
      return state;
  }
};

export default expenseReducer;
