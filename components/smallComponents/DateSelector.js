import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyDate } from "../../redux/actions/expenseActions";

export default function DateSelector() {
  const monthlyDate = useSelector((state) => state.expense.selectedDate);

  const dispatch = useDispatch();

  const handleMonthlyDateSelect = (date) => {
    dispatch(setMonthlyDate(date));
  };

  return (
    <>
      <Text style={{ margin: 5 }}> Date </Text>
      <ScrollView horizontal>
        {Array.from({ length: 28 }, (_, index) => index + 1).map((date) => (
          <TouchableOpacity
            key={date}
            onPress={() => handleMonthlyDateSelect(date)}
            style={{
              backgroundColor: monthlyDate === date ? "#42b3f5" : "white",
              margin: 5,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: monthlyDate === date ? "white" : "black", // Change text color when selected
              }}
            >
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
