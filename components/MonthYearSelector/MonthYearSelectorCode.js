import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMonth, setCurrentYear } from '../../redux/actions/expenseActions';

export const useMonthYearSelectorLogic = () => {
  const dispatch = useDispatch();

  const currentMonth = useSelector(state => state.expense.currentMonth);
  const currentYear = useSelector(state => state.expense.currentYear);

  // Array of month names
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  console.log('Logic - Current Month:', currentMonth);
  console.log('Logic - Current Year:', currentYear);

  const handlePrevMonth = () => {
    const currentMonthIndex = monthNames.indexOf(currentMonth);
    let newMonthIndex = currentMonthIndex - 1;
    let newYear = currentYear;
    
    if (newMonthIndex < 0) {
      newMonthIndex = monthNames.length - 1;
      newYear -= 1;
    }

    const newMonth = monthNames[newMonthIndex];
    console.log('Logic - New Month:', newMonth);
    console.log('Logic - New Year:', newYear);
    
    dispatch(setCurrentMonth(newMonth));
    dispatch(setCurrentYear(newYear));
  };

  const handleNextMonth = () => {
    const currentMonthIndex = monthNames.indexOf(currentMonth);
    let newMonthIndex = currentMonthIndex + 1;
    let newYear = currentYear;
    
    if (newMonthIndex >= monthNames.length) {
      newMonthIndex = 0;
      newYear += 1;
    }

    const newMonth = monthNames[newMonthIndex];
    console.log('Logic - New Month:', newMonth);
    console.log('Logic - New Year:', newYear);
    
    dispatch(setCurrentMonth(newMonth));
    dispatch(setCurrentYear(newYear));
  };

  const handleGoToCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthName = monthNames[currentMonthIndex];
    const currentYear = currentDate.getFullYear();
    console.log('Logic - Current Month:', currentMonthName);
    console.log('Logic - Current Year:', currentYear);
    dispatch(setCurrentMonth(currentMonthName));
    dispatch(setCurrentYear(currentYear));
  };

  return {
    currentMonth,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    handleGoToCurrentMonth,
  };
};
