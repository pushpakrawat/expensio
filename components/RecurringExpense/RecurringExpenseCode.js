import { useState } from 'react';

export const useRecurringExpenseLogic = () => {
  const [selectedOption, setSelectedOption] = useState('Monthly'); // Default selected option

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return {
    selectedOption,
    handleOptionSelect,
  };
};
