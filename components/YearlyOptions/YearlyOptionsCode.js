import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setYearlyMonth, setIsEnding } from '../../redux/actions/expenseActions';
import DateTimePicker from '@react-native-community/datetimepicker';

const YearlyOptionsCode = ({ isEnding }) => {
  const dispatch = useDispatch();
  const selectedDates = useSelector(state => state.expense.expenseDate || []);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const yearlyMonth = useSelector(state => state.expense.yearlyMonth);

  const handleDateChangeAndDispatch = (date) => {
    const updatedDates = [date, ...selectedDates.slice(1)]; // Replace the first element of the array
    dispatch(setExpenseDate(updatedDates));
    setShowDatePicker(false); // Close the date picker
  };

  const handleYearlyMonthSelect = (monthIndex) => {
    dispatch(setYearlyMonth(monthIndex));
  };

  // Utility function to get the name of the month
  const getMonthName = (monthIndex) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  };

  return (
    <>
      {isEnding && (
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text>Select Date</Text>
        </TouchableOpacity>
      )}

      {!isEnding && (
        <ScrollView horizontal>
          {Array.from({ length: 12 }, (_, index) => index).map(monthIndex => (
            <TouchableOpacity
              key={monthIndex}
              onPress={() => handleYearlyMonthSelect(monthIndex)}
              style={{
                backgroundColor: yearlyMonth === monthIndex ? 'blue' : 'gray',
                margin: 5,
                padding: 10,
                borderRadius: 5,
              }}>
              <Text>{getMonthName(monthIndex)}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              handleDateChangeAndDispatch(selectedDate);
            }
          }}
        />
      )}

      {selectedDates.length > 0 && (
        <Text>Selected Date: {selectedDates[0].toDateString()}</Text>
      )}
    </>
  );
};

export default YearlyOptionsCode;
