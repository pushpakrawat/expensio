import { SET_CURRENT_MONTH, SET_CURRENT_YEAR } from '../actionTypes';

// Define the initial state outside the reducer function
const currentDate = new Date();
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const initialMonthIndex = currentDate.getMonth(); // No need to add 1 here
const initialMonthName = monthNames[initialMonthIndex];
const initialYear = currentDate.getFullYear();

const initialState = {
  currentMonth: initialMonthName, // Use month name here
  currentYear: initialYear,       // Initial state
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MONTH:
      return {
        ...state,
        currentMonth: action.payload,
      };
    case SET_CURRENT_YEAR:
      return {
        ...state,
        currentYear: action.payload,
      };
    default:
      return state;
  }
};

export default expenseReducer;
