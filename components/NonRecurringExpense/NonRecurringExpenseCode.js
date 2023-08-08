import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { setExpenseDateNR } from '../../redux/actions/expenseActions'; // Import the action creator

const NonRecurringExpenseCode = () => {
  const dispatch = useDispatch();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const selectedDate = useSelector(state => state.expense.selectedDateNR); // Get selected date from Redux

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChangeAndDispatch = (date) => {
    hideDatepicker();
    dispatch(setExpenseDateNR(date)); // Dispatch the selected date to Redux
  };

  return (
    <>
      <TouchableOpacity onPress={showDatepicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            handleDateChangeAndDispatch(selectedDate);
          }}
        />
      )}

      {/* Display the selected date */}
      {selectedDate && (
        <Text>Selected Date: {selectedDate.toDateString()}</Text>
      )}
    </>
  );
};

export default NonRecurringExpenseCode;
