import React from 'react';
import { useSelector } from 'react-redux';

const useExpenseListLogic = () => {
  const { currentMonth, currentYear } = useSelector((state) => state.expense);
  const expenses = useSelector((state) => state.expense.expenses);

  // Define a mapping of month names to numbers
  const monthNameToNumber = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  // Get the numeric value of the currentMonth
  const numericCurrentMonth = monthNameToNumber[currentMonth];

  // Filter expenses based on selected month and year
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.selectedDateNR);
    const expenseMonth = expenseDate.getMonth() + 1;
    const expenseYear = expenseDate.getFullYear();

    return (
      expenseMonth === numericCurrentMonth &&
      expenseYear === currentYear
    );
  });

  return filteredExpenses;
};

export default useExpenseListLogic;
