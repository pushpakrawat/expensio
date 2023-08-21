import { useSelector } from 'react-redux';

const useExpenseListCode = () => {
  const expenses = useSelector(state => state.expense.expenses);
  const currentMonth = useSelector(state => state.expense.currentMonth);
  const currentYear = useSelector(state => state.expense.currentYear);
  
  const filteredExpenses = expenses.filter(expense => {
    const { expenseEndDate, selectedFrequency, isRecurring, selectedMonth, selectedYear } = expense;
    console.log('EL - Selected Month', selectedMonth);
    console.log('EL - Selected Year', selectedYear);

    const endMonth = expenseEndDate ? expenseEndDate.getMonth() + 1 : null;
    console.log('EL - End Month', endMonth)
    const endYear = expenseEndDate ? expenseEndDate.getFullYear() : null;
    console.log('EL - End Year', endYear)

    if (!isRecurring) {
      if (endMonth === currentMonth && endYear === currentYear) {
        return true;
      }
    } else {
      if (
        (!expenseEndDate || (endYear > currentYear && selectedYear < currentYear) ||
        (selectedYear === currentYear && selectedMonth <= currentMonth) ||
        (endYear === currentYear && endMonth >= currentMonth))
      ) {
        const a = (currentYear - selectedYear) * 12;
        const b = currentMonth - selectedMonth;
        const x = (a + b) % selectedFrequency;
    
        return x === 0;
      }
    }
  
    
    return false;
  });

  return filteredExpenses;
};

export default useExpenseListCode;