import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useExpenseItemLogic = (expense) => {
  const {
    date,
    title,
    amount,
    isRecurring,
    selectedFrequency,
    selectedDate,
    selectedMonth,
    selectedYear,
    expenseEndDate,
  } = expense;

  const dateObject = new Date(date);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth(); // Months are 0-indexed, so add 1
  const year = dateObject.getUTCFullYear() % 100; // Get last two digits of the year

  const formattedDate = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year.toString().padStart(2, "0")}`;

  // Get current month and year from Redux store
  const currentMonth = useSelector(state => state.expense.currentMonth)+1;
  const currentYear = useSelector(state => state.expense.currentYear);

  const formattedDueDate = `${selectedDate.toString().padStart(2, "0")}/${currentMonth
    .toString()
    .padStart(2, "0")}/${currentYear.toString().padStart(2, "0")}`;

  return {
    title,
    amount,
    isRecurring,
    formattedDate,
    formattedDueDate,
  };
};
