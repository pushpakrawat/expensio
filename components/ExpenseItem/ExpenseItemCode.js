import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useExpenseItemLogic = (expense) => {
  const currentMonth = useSelector(state => state.expense.currentMonth) - 1;
  const currentYear = useSelector(state => state.expense.currentYear);
  const selectedFrequency = useSelector(state => state.expense.selectedFrequency);

  const expenseDateObjects = useMemo(() => {
    if (expense.expenseDate && Array.isArray(expense.expenseDate)) {
      return expense.expenseDate.map(date => new Date(date));
    }
    return [];
  }, [expense.expenseDate]);

  const parsedDates = expenseDateObjects
    .map((date) => {
      const parsedDate = new Date(date);
      if (selectedFrequency === 'Monthly' || selectedFrequency === 'Yearly') {
        parsedDate.setMonth(currentMonth);
        parsedDate.setFullYear(currentYear);
      }
      return parsedDate;
    })
    .filter((parsedDate) => {
      if (selectedFrequency === 'Custom') {
        return parsedDate.getMonth() === currentMonth && parsedDate.getFullYear() === currentYear;
      } else if (selectedFrequency === 'Monthly') {
        return parsedDate.getMonth() === currentMonth;
      } else if (selectedFrequency === 'Yearly') {
        return parsedDate.getFullYear() === currentYear;
      }
      return false;
    })
    .map((filteredDate) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return filteredDate.toLocaleDateString('en-US', options);
    });

  // Extract the dueDate value
  const dueDate = parsedDates.map((parsedDate, index) => parsedDate.toString());

  return {
    title: expense.title,
    amount: expense.amount,
    isRecurring: expense.isRecurring,
    date: expenseDateObjects.length > 0 ? expenseDateObjects[0] : null,
    formattedDate: expenseDateObjects.length > 0 ? expenseDateObjects[0].toLocaleDateString() : '',
    dueDate: dueDate,
  };
};
