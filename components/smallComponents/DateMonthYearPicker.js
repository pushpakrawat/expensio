import React, { useState } from "react";
import { Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setExpenseDate } from "../../redux/actions/expenseActions";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DateMonthYearPicker() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.expense.expenseDate);

  const isRecurring = useSelector((state) => state.expense.isRecurring);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChangeAndDispatch = (date) => {
    if (date) {
      dispatch(setExpenseDate(date));
      setShowDatePicker(false);
    }
  };

  const handleRemoveEndDate = () => {
    dispatch(setExpenseDate(null));
    setShowDatePicker(false);
  };

  return (
    <>
      {((!isRecurring || isRecurring) && !selectedDate) && (
        <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      )}

      {selectedDate && (
        <Button title="Remove Date" onPress={handleRemoveEndDate} />
      )}

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate ? selectedDate : new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              handleDateChangeAndDispatch(selectedDate);
            }
          }}
        />
      )}

      {selectedDate > 0 && (
        <>
          <Text>
            Selected Date: {selectedDate.toDateString()}
          </Text>
          <Button title="Edit Date" onPress={() => setShowDatePicker(true)} />
        </>
      )}
    </>
  );
}
