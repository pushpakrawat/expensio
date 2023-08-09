import { useDispatch, useSelector } from 'react-redux';
import { setTitle, setAmount, setIsRecurring, addExpense, setExpenseDateNR } from '../../redux/actions/expenseActions';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

export const useAddExpenseLogic = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize the navigation object
  const { title, amount, isRecurring, selectedDateNR } = useSelector(state => state.expense);

  const handleTitleChange = text => {
    dispatch(setTitle(text));
  };

  const handleAmountChange = text => {
    dispatch(setAmount(text));
  };

  const handleToggleRecurring = () => {
    dispatch(setIsRecurring(!isRecurring));
  };

  const generateUniqueId = () => {
    // Generate a unique ID using a timestamp and a random number
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2);
    return `${timestamp}-${randomNumber}`;
  };

  const handleAddExpense = () => {
    if (title && amount && selectedDateNR) { // Make sure a date is selected
      const newExpense = {
        id: generateUniqueId(), // Generate a unique id
        title,
        amount: parseFloat(amount),
        isRecurring,
        selectedDateNR, // Pass the selected date
      };
      dispatch(addExpense(newExpense));

      // Clear the fields
      dispatch(setTitle(''));
      dispatch(setAmount(''));
      dispatch(setIsRecurring(false));
      dispatch(setExpenseDateNR(null));

      // Navigate back
      navigation.goBack();
    }
  };

  const handleToggleNonRecurring = () => {
    dispatch(setIsRecurring(!isRecurring));
  };

  const handleDateChange = date => {
    dispatch(setExpenseDateNR(date)); // Dispatch the selected date to Redux
  };

  return {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleToggleRecurring,
    handleToggleNonRecurring,
    handleDateChange,
    title,
    amount,
    isRecurring,
    selectedDateNR,
  };
};
