import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyDate } from "../../redux/actions/expenseActions";

export default function DateSelector() {
  const monthlyDate = useSelector((state) => state.expense.monthlyDate);

  const dispatch = useDispatch();

  const handleMonthlyDateSelect = (date) => {
    dispatch(setMonthlyDate(date));
  };

  return (
    <ScrollView horizontal>
      {Array.from({ length: 28 }, (_, index) => index + 1).map((date) => (
        <TouchableOpacity
          key={date}
          onPress={() => handleMonthlyDateSelect(date)}
          style={{
            backgroundColor: monthlyDate === date ? "blue" : "gray",
            margin: 5,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text>{date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
