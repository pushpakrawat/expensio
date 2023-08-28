import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import {
  addPaidMonth,
  removePaidMonth,
} from "../../redux/actions/expenseActions";

const MarkPaidButton = ({ expense }) => {
  const dispatch = useDispatch();
  const currentMonth = useSelector((state) => state.expense.currentMonth) + 1;
  const currentYear = useSelector((state) => state.expense.currentYear);

  const [isPaid, setIsPaid] = useState('');

  const handlePress = () => {
    const isExpensePaid = expense.paidMonths.some(
      (item) => item.month === currentMonth && item.year === currentYear
    );

    if (isExpensePaid) {
      dispatch(
        removePaidMonth({
          expenseId: expense.id,
          month: currentMonth,
          year: currentYear,
        })
      );
    } else {
      dispatch(
        addPaidMonth({
          expenseId: expense.id,
          month: currentMonth,
          year: currentYear,
        })
      );
    }

    setIsPaid(isExpensePaid); // Update the state with the correct value
    return isExpensePaid; // Return the value
  };

  let localIsPaid = isPaid; // Create a local variable
  localIsPaid = expense.paidMonths.some(
    (item) => item.month === currentMonth && item.year === currentYear
  );

  return (
    <TouchableOpacity
      onPress={() => {
        localIsPaid = handlePress(); // Update the local variable
        setIsPaid(localIsPaid); // Update the state with the local variable value
      }}
      style={[styles.button, localIsPaid && styles.buttonHighlighted]}
    >
      <Feather
        name={localIsPaid ? "check-circle" : "circle"}
        size={24}
        color={localIsPaid ? "black" : "black"}
        style={styles.icon}
      />
      <Text style={[styles.label, localIsPaid && styles.labelHighlighted]}>
        {localIsPaid ? "Mark as Unpaid" : "Mark as Paid"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
  buttonHighlighted: {
    backgroundColor: "#f5d442",
    borderColor: "#f5d442",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "500", // Changed from numeric to string
    color: "black",
  },
  labelHighlighted: {
    color: "black",
  },
});

export default MarkPaidButton;
