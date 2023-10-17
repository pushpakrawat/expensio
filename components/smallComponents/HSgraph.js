import { View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";

export default function HSgraph() {
  const filteredExpenses = useSelector(
    (state) => state.expense.filteredExpenses
  );
  const dateAmountMap = {};

  // Create an array to store all the dates, including selectedDate and expenseEndDate
  const allDates = [];

  // Aggregate amounts based on dates
  filteredExpenses.forEach((expense) => {
    if (expense.expenseEndDate) {
      const endDate = new Date(expense.expenseEndDate);
      const dayOfMonth = endDate.getDate(); // Extract the day of the month
      dateAmountMap[dayOfMonth] = (dateAmountMap[dayOfMonth] || 0) + expense.amount;
      allDates.push(dayOfMonth);
    } else if (expense.selectedDate) {
      dateAmountMap[expense.selectedDate] = (dateAmountMap[expense.selectedDate] || 0) + expense.amount;
      allDates.push(expense.selectedDate);
    }
  });

  // Deduplicate allDates
  const uniqueDates = [...new Set(allDates)];

  // Sort unique dates in ascending order
  uniqueDates.sort((a, b) => a - b);

  const aggregatedData = uniqueDates.map((dayOfMonth) => dateAmountMap[dayOfMonth]);

  return (
    <View>
      <LineChart
        data={{
          labels: uniqueDates.map((dayOfMonth) => dayOfMonth.toString()), // Convert to string if needed
          datasets: [
            {
              data: aggregatedData,
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="₹"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#42B3F5",
          backgroundGradientTo: "#42B3F5",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 0,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FFDC32",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />
    </View>
  );
}
