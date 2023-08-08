export const useExpenseItemLogic = (expense) => {
  const { title, amount, isRecurring, date, selectedDateNR,  } = expense;

  return {
    title,
    amount,
    isRecurring,
    date,
    selectedDateNR,
  };
};
