// MonthlyOptionCode.js

import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMonthlyDate, setExpenseDate } from '../../redux/actions/expenseActions';
import DateTimePicker from '@react-native-community/datetimepicker';


const MonthlyOptionCode = ({ isEnding }) => {
  const dispatch = useDispatch();
  const selectedDates = useSelector(state => state.expense.expenseDate || []);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const monthlyDate = useSelector(state => state.expense.monthlyDate);

  const handleDateChangeAndDispatch = (date) => {
    const updatedDates = [date, ...selectedDates.slice(1)]; // Replace the first element of the array
    dispatch(setExpenseDate(updatedDates));
    setShowDatePicker(false); // Close the date picker
  };

  const handleMonthlyDateSelect = (date) => {
    dispatch(setMonthlyDate(date));
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
          {Array.from({ length: 28 }, (_, index) => index + 1).map(date => (
            <TouchableOpacity
              key={date}
              onPress={() => handleMonthlyDateSelect(date)}
              style={{
                backgroundColor: monthlyDate === date ? 'blue' : 'gray',
                margin: 5,
                padding: 10,
                borderRadius: 5,
              }}>
              <Text>{date}</Text>
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

export default MonthlyOptionCode;
