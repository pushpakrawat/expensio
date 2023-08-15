import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setAmount, setIsRecurring, setIsEnding, addExpense, setExpenseDate, setMonthlyDate } from '../../redux/actions/expenseActions';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation


export const useAddExpenseLogic = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize the navigation object
  const { title, amount, isRecurring, expenseDate, isEnding, selectedFrequency, monthlyDate } = useSelector(state => state.expense);

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

  const handleToggleIsRecurring = () => {
    console.log('handleToggleIsRecurring:', !isRecurring);
    dispatch(setIsRecurring(!isRecurring));
  };

  const handleDateChange = date => {
    console.log('handleDateChange:', date);
    dispatch(setExpenseDate(date)); // Dispatch the selected date to Redux
  };

  const handleAddExpense = () => {
    if (title && amount && expenseDate) { // Make sure a date is selected
      const newExpense = {
        id: generateUniqueId(), // Generate a unique id
        title,
        amount: parseFloat(amount),
        isRecurring,
        expenseDate,
        monthlyDate,
        isEnding,
        selectedFrequency,
        date: new Date(),
      };
      // console.log('handleAddExpense - New Expense:', newExpense);
      dispatch(addExpense(newExpense));

      // Clear the fields
      dispatch(setTitle(''));
      dispatch(setAmount(''));
      dispatch(setIsRecurring(false));
      dispatch(setIsEnding(false));
      dispatch(setExpenseDate([]));   
      dispatch(setMonthlyDate(""));   

      // Navigate back
      navigation.goBack();
    }
  };

  return {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleToggleIsRecurring,
    handleDateChange,
    title,
    amount,
    isRecurring,
    expenseDate,
  };
};
