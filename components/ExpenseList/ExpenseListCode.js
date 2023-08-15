import { useSelector } from 'react-redux';

const useExpenseListCode = () => {
  const expenses = useSelector(state => state.expense.expenses);
  const currentMonth = useSelector(state => state.expense.currentMonth);
  const currentYear = useSelector(state => state.expense.currentYear);
  

  const filteredExpenses = expenses.filter(expense => {
    const { expenseDate, selectedFrequency, isRecurring, date, isEnding } = expense;

    const additionMonth = date.getMonth() + 1;
    const additionYear = date.getFullYear();

    if (!isEnding) {
      if (selectedFrequency === 'Monthly') {
        console.log('addition date of non-ending', additionMonth, additionYear)
        if (additionYear < currentYear || (additionYear === currentYear && additionMonth <= currentMonth)) {
        return true;          
        }
      } else if (selectedFrequency === 'Yearly') {
        console.log('addition date of non-ending', additionMonth, additionYear)
        if ((additionYear < currentYear && additionMonth === currentMonth) || (additionYear === currentYear && additionMonth === currentMonth)) {
        return true;          
        }
      }
    }

    for (const expenseDateItem of expenseDate) {
      const monthIndex = expenseDateItem.getMonth() + 1;
      const yearIndex = expenseDateItem.getFullYear();

      if (!isRecurring) {
        if (monthIndex === currentMonth && yearIndex === currentYear) {
          return true;
        }
      } else if (selectedFrequency === 'Monthly') {
       if (
          (yearIndex > currentYear && additionYear < currentYear) ||
          (additionYear === currentYear && additionMonth <= currentMonth) ||
          (yearIndex === currentYear && monthIndex >= currentMonth)
        ) {
          return true;
        }
      } else if (selectedFrequency === 'Yearly') {
        if ((monthIndex === currentMonth && yearIndex >= currentYear && additionYear < currentYear) ||(additionYear === currentYear && additionMonth <= currentMonth)) {
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
