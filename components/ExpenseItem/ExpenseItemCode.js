import { useMemo } from 'react'; // Import useMemo

export const useExpenseItemLogic = (expense) => {
  // Other logic...

  // Process expenseDate as an array of Date objects
  const expenseDateObjects = useMemo(() => {
    if (expense.expenseDate && Array.isArray(expense.expenseDate)) {
      return expense.expenseDate.map(date => new Date(date)); // Convert each date to Date object
    }
    return [];
  }, [expense.expenseDate]); // Memoize the result

  // Return the processed values
  return {
    title: expense.title,
    amount: expense.amount,
    isRecurring: expense.isRecurring,
    date: expenseDateObjects.length > 0 ? expenseDateObjects[0] : null, // Use the first processed date
    expenseDate: expenseDateObjects, // Use the processed dates array
  };
};
