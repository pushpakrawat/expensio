import { saveExpensesToLocalStorage } from "../../Utills/localStorage";
import {
  SET_CURRENT_MONTH,
  SET_CURRENT_YEAR,
  ADD_EXPENSE,
  SET_TITLE,
  SET_AMOUNT,
  SET_IS_RECURRING,
  SET_EXPENSE_DATE_NR,
  SELECT_FREQUENCY,
} from "../actionTypes";

const currentDate = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const initialMonthIndex = currentDate.getMonth();
const initialMonthName = monthNames[initialMonthIndex];
const initialYear = currentDate.getFullYear();

const initialState = {
  currentMonth: initialMonthName,
  currentYear: initialYear,
  title: "",
  amount: "",
  isRecurring: false,
  selectedDateNR: null,
  expenses: [],
  date: null,
  selectedFrequency: 'Monthly',
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH:
      console.log("SET_CURRENT_MONTH:", action.payload);
      return {
        ...state,
        currentMonth: action.payload,
      };
    case SET_CURRENT_YEAR:
      console.log("SET_CURRENT_YEAR:", action.payload);
      return {
        ...state,
        currentYear: action.payload,
      };
    case SET_EXPENSE_DATE_NR:
      console.log("SET_EXPENSE_DATE_NR:", action.payload);
      return {
        ...state,
        selectedDateNR: action.payload,
        
      };
    case ADD_EXPENSE:
      console.log("ADD_EXPENSE:", action.payload);
      const newExpenses = [...state.expenses, action.payload];
      saveExpensesToLocalStorage(newExpenses); // Save to local storage
      return {
        ...state,
        expenses: newExpenses,
      };
    case SET_TITLE:
      console.log("SET_TITLE:", action.payload);
      return {
        ...state,
        title: action.payload,
      };
      
    case SET_AMOUNT:
      console.log("SET_AMOUNT:", action.payload);
      return {
        ...state,
        amount: action.payload,
      };
    case SET_IS_RECURRING:
      console.log("SET_IS_RECURRING:", action.payload);
      return {
        ...state,
        isRecurring: action.payload,
      };
    
    case SELECT_FREQUENCY:
      console.log("SELECT_FREQUENCY:", action.payload)
      return {
        ...state,
        selectedFrequency: action.payload,
      };  
    default:
      return state;
  }
};

export default expenseReducer;
