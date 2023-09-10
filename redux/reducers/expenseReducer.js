import {
  SET_CURRENT_MONTH_NAME,
  SET_CURRENT_MONTH,
  SET_CURRENT_YEAR,
  ADD_EXPENSE,
  SET_TITLE,
  SET_AMOUNT,
  SET_IS_RECURRING,
  SET_YEARLY_MONTH,
  SET_SELECTED_YEAR,
  SET_EXPENSE_DATE,
  SET_MONTHLY_DATE,
  SELECT_FREQUENCY,
  ADD_PAID_MONTH,
  REMOVE_PAID_MONTH,
  SET_FILTERED_EXPENSES,
  REMOVE_EXPENSE,
  GET_EXPENSES,
} from "../actionTypes";

import {
  addExpenseToFirestore,
  updateExpenseInFirestore,
  deleteExpenseFromFirestore,
} from "../../firebaseUtils";

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
  filteredExpenses: [],
  expenses: [],
  paidMonths: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH_NAME:
      return { ...state, currentMonthName: action.payload };
    
    case SET_CURRENT_MONTH:
      return { ...state, currentMonth: action.payload };
    
    case SET_CURRENT_YEAR:
      return { ...state, currentYear: action.payload };
    
    case SET_TITLE:
      return { ...state, title: action.payload };
    
    case SET_AMOUNT:
      return { ...state, amount: action.payload };
    
    case SET_IS_RECURRING:
      return { ...state, isRecurring: action.payload };
    
    case SELECT_FREQUENCY:
      return { ...state, selectedFrequency: action.payload };
    
    case SET_MONTHLY_DATE:
      return { ...state, selectedDate: action.payload };
    
    case SET_YEARLY_MONTH:
      return { ...state, selectedMonth: action.payload };
    
    case SET_SELECTED_YEAR:
      return { ...state, selectedYear: action.payload };
    
    case SET_EXPENSE_DATE:
      return { ...state, expenseEndDate: action.payload };
    
    case ADD_EXPENSE:
      // Handle async Firestore operation separately
      handleFirestoreOperation(addExpenseToFirestore, action.payload);
    
    case ADD_PAID_MONTH:
      handleFirestoreOperation(updatePaidMonths, action.payload);
    
    case REMOVE_PAID_MONTH:
      handleFirestoreOperation(updatePaidMonths, action.payload);
    
    case SET_FILTERED_EXPENSES:
      return { ...state, filteredExpenses: action.payload };
    
    case REMOVE_EXPENSE:
      // Handle async Firestore operation separately
      handleFirestoreOperation(deleteExpenseFromFirestore, action.payload.expenseId);
    
    case GET_EXPENSES:
      console.log("Reducer - expenses retrieved: ", action.payload)
      return { ...state, expenses: action.payload };

    default:
      return state;
  }
};

// Helper function to handle async Firestore operations
const handleFirestoreOperation = async (operation, payload) => {
  try {
    await operation(payload);
  } catch (error) {
    console.error("Error performing Firestore operation: ", error);
  }
};

// Helper function to update paid months
const updatePaidMonths = (expenseId, month, year) => {
  return state.expenses.map((expense) =>
    expense.id === expenseId
      ? {
          ...expense,
          paidMonths: [...expense.paidMonths, { month, year }],
        }
      : expense
  );
};

export default expenseReducer;
