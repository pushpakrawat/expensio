import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const ExpenseSummary = () => {
  const expenses = useSelector((state) => state.expense.filteredExpenses);
  const currentMonth = useSelector((state) => state.expense.currentMonth)+1;
  const currentYear = useSelector((state) => state.expense.currentYear);

  // Calculate total paid and total unpaid amounts
  let totalPaidAmount = 0;
  let totalUnpaidAmount = 0;

  expenses.forEach((expense) => {
    // Check if the expense is paid for the current month and year
    const isPaid = expense.paidMonths.some(
      (item) => item.month === currentMonth && item.year === currentYear
    );

    // If the expense is paid, add its amount to the total paid amount
    if (isPaid) {
      totalPaidAmount += expense.amount;
    } else {
      // If the expense is not paid, add its amount to the total unpaid amount
      totalUnpaidAmount += expense.amount;
    }
  });

  const totalExpenses = expenses.length;

  return (
    <View style={summaryStyles.summaryContainer}>
      <Text style={summaryStyles.summaryText}>
        Total: {totalExpenses} | Paid: {totalPaidAmount} | Unpaid: {totalUnpaidAmount}
      </Text>
    </View>
  );
};

const summaryStyles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
  },
  summaryText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ExpenseSummary;
