import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setAmount, setIsRecurring, setIsEnding, addExpense, setExpenseDate, setMonthlyDate } from '../../redux/actions/expenseActions';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation


export const useAddExpenseLogic = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); 
  const { title, amount, isRecurring, expenseEndDate, selectedFrequency,selectedDate, selectedMonth, selectedYear } = useSelector(state => state.expense);



  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2);
    return `${timestamp}-${randomNumber}`;
  };

  const handleTitleChange = text => {
    console.log('handleTitleChange:', text);
    dispatch(setTitle(text));
  };

  const handleAmountChange = text => {
    console.log('handleAmountChange:', text);
    dispatch(setAmount(text));
  };


  const handleDateChange = date => {
    console.log('handleDateChange:', date);
    dispatch(setExpenseDate(date)); // Dispatch the selected date to Redux
  };

  const handleAddExpense = () => {
    if (title && amount ) { // Make sure a date is selected
      const newExpense = {
        date: new Date(),
        id: generateUniqueId(), // Generate a unique id
        title,
        amount: parseFloat(amount),
        isRecurring,
        selectedFrequency,
        selectedDate,
        selectedMonth,
        selectedYear,
        expenseEndDate,

      };
      // console.log('handleAddExpense - New Expense:', newExpense);
      dispatch(addExpense(newExpense));

      // Clear the fields
      dispatch(setTitle(''));
      dispatch(setAmount(''));
      dispatch(setIsRecurring(''));
      dispatch(setMonthlyDate(""));   
      dispatch(setExpenseDate(""));   

      // Navigate back
      navigation.goBack();
    }
  };

  return {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleDateChange,
    title,
    amount,
    isRecurring,
    expenseEndDate,
  };
};
