import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { setExpenseDate } from '../../redux/actions/expenseActions'; // Import the action creator

const NonRecurringExpenseCode = () => {
  const dispatch = useDispatch();

  const [showDatePicker, setShowDatePicker] = useState(false);
  const selectedDates = useSelector(state => state.expense.expenseDate || []); // Get selected dates from Redux

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChangeAndDispatch = (date) => {
    console.log("(NR expense)Selected Date:", date);
    hideDatepicker();
    const updatedDates = [...selectedDates, date]; // Add the new date to the existing array
    console.log("Updated Dates:", updatedDates);
    dispatch(setExpenseDate(updatedDates)); // Dispatch the updated array of dates to Redux
  };

  return (
    <>
      <TouchableOpacity onPress={showDatepicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()} // Show current date by default
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              handleDateChangeAndDispatch(selectedDate);
            }
          }}
        />
      )}

      {/* Display the selected dates */}
      {selectedDates.map((date, index) => (
        <Text key={index}>Selected Date: {date.toDateString()}</Text>
      ))}
    </>
  );
};

export default NonRecurringExpenseCode;
