import { useState } from 'react';

export const useAddExpenseLogic = (dispatch) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleToggleRecurring = () => {
    setIsRecurring((prev) => !prev);
  };

  const handleAddExpense = (title, amount, isRecurring) => {
    if (title && amount) {
      const newExpense = {
        title,
        amount: parseFloat(amount),
        isRecurring,
      };
      dispatch(addExpense(newExpense));
    }
  };

  return {
    handleAddExpense,
    handleTitleChange,
    handleAmountChange,
    handleToggleRecurring,
    title,
    amount,
    isRecurring,
  };
};
