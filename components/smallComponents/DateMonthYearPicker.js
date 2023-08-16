import React, { useState } from "react";
import { Text, TouchableOpacity,} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {setExpenseDate} from "../../redux/actions/expenseActions";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateMonthYearPicker() {
  const dispatch = useDispatch();  
  const selectedDates = useSelector((state) => state.expense.expenseDate || []);
  const isEnding = useSelector((state) => state.expense.isEnding);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChangeAndDispatch = (date) => {
    const updatedDates = [date, ...selectedDates.slice(1)]; // Replace the first element of the array
    dispatch(setExpenseDate(updatedDates));
    setShowDatePicker(false); // Close the date picker
  };

  return (
    <>
      {isEnding && (
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text>Select Date</Text>
        </TouchableOpacity>
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
        <Text>Selected Date(s): {selectedDates[0].toDateString()}</Text>
      )}
    </>
  );
}
