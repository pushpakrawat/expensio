import { SET_CURRENT_MONTH, SET_CURRENT_YEAR } from '../actionTypes'; // Adjust the import path based on your folder structure

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
