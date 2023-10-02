import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Feather from "react-native-vector-icons/FontAwesome";
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
        name={localIsPaid ? "check-circle" : "check-circle"}
        size={35} // Reduced the icon size
        color={localIsPaid ? "#c9c9c9" : "#f5d442"}
        
      />
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: 30, 
    // height: 30, 
    backgroundColor: "white",
    borderRadius: 25, 
  },
  buttonHighlighted: {
    // backgroundColor: "#f5d442",
    // borderColor: "#f5d442",
    // width: 20, 
    // height: 20,
  },
  icon: {
  },
});

export default MarkPaidButton;
