import { useSelector } from 'react-redux';

const useExpenseListCode = () => {
  const expenses = useSelector(state => state.expense.expenses);
  const currentMonth = useSelector(state => state.expense.currentMonth);
  const currentYear = useSelector(state => state.expense.currentYear);

  const filteredExpenses = expenses.filter(expense => {
    const { expenseDate, selectedFrequency, isRecurring, isEnding } = expense;

    for (const date of expenseDate) {
      const monthIndex = date.getMonth() + 1;
      const yearIndex = date.getFullYear();

      if (!isRecurring) {
        if (monthIndex === currentMonth && yearIndex === currentYear) {
          return true;
        } 
      } else if (selectedFrequency === 'Monthly') {
        if (yearIndex > currentYear || (yearIndex === currentYear && monthIndex >= currentMonth)) {
          return true;
        }         
      } else if (selectedFrequency === 'Yearly') {
        if (monthIndex === currentMonth && yearIndex >= currentYear) {
          return true;
        }
      } else if (selectedFrequency === 'Custom') {
        if (monthIndex === currentMonth && yearIndex === currentYear) {
          return true;
        }
      }
    }
    
    return false;
  });

  return filteredExpenses;
};

export default useExpenseListCode;
