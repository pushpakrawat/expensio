import { useSelector } from 'react-redux';
import { addExpensesToStorage, retrieveExpensesFromStorage,} from "../../Utills/storage";

const useExpenseListCode = () => {
  const expenses = useSelector(state => state.expense.expenses);
  const currentMonth = useSelector(state => state.expense.currentMonth);
  const currentYear = useSelector(state => state.expense.currentYear);

  
  
  const filteredExpenses = expenses.filter(expense => {
    const { expenseEndDate, selectedFrequency, isRecurring, selectedMonth, selectedYear } = expense;
    console.log('EL - Selected Month', selectedMonth);
    console.log('EL - Selected Year', selectedYear);

    const endMonth = expenseEndDate ? expenseEndDate.getMonth() + 1 : Infinity;
    console.log('EL - End Month', endMonth)
    const endYear = expenseEndDate ? expenseEndDate.getFullYear() : Infinity;
    console.log('EL - End Year', endYear)

    if (!isRecurring) {
      if (endMonth === currentMonth && endYear === currentYear) {
        return true;
      }
    } else {
      if (
        ((selectedYear < currentYear && currentYear < endYear ) ||
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