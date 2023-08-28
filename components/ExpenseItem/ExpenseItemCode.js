import { useSelector } from "react-redux";

export const useExpenseItemLogic = (expense) => {
  const {
    date,
    title,
    amount,
    isRecurring,
    selectedFrequency,
    selectedDate,
    selectedMonth,
    selectedYear,
    expenseEndDate,
  } = expense;

  const dateObject = new Date(date);
  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth();
  const year = dateObject.getUTCFullYear() % 100;

  const formattedDate = `${day.toString().padStart(2, "0")}/${(month + 1)
    .toString()
    .padStart(2, "0")}/${year.toString().padStart(2, "0")}`;

  // Get current month and year from Redux store
  const currentMonth = useSelector((state) => state.expense.currentMonth) + 1;
  const currentYear = useSelector((state) => state.expense.currentYear);


  let formattedDueDate;

  if (!isRecurring) {
    const endDate = expense.expenseEndDate;
    const endDay = endDate.getUTCDate();
    formattedDueDate = `${endDay.toString().padStart(2, "0")}/${currentMonth
      .toString()
      .padStart(2, "0")}/${currentYear.toString().padStart(2, "0")}`;
  } else {
    formattedDueDate = `${selectedDate.toString().padStart(2, "0")}/${currentMonth
      .toString()
      .padStart(2, "0")}/${currentYear.toString().padStart(2, "0")}`;
  }

  return {
    title,
    amount,
    isRecurring,
    formattedDate,
    formattedDueDate,
  };
};
