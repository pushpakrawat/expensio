import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setYearlyMonth } from '../../redux/actions/expenseActions';


export default function MonthSelector() {
  const dispatch = useDispatch();

  const yearlyMonth = useSelector((state) => state.expense.yearlyMonth);
  const isEnding = useSelector((state) => state.expense.isEnding);

  const handleYearlyMonthSelect = (monthIndex) => {
    dispatch(setYearlyMonth(monthIndex+1));
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return months[monthIndex];
  };

  return (
    <>
      
        <ScrollView horizontal>
          {Array.from({ length: 12 }, (_, index) => index).map((monthIndex) => (
            <TouchableOpacity
              key={monthIndex}
              onPress={() => handleYearlyMonthSelect(monthIndex)}
              style={{
                backgroundColor: yearlyMonth === monthIndex ? "blue" : "gray",
                margin: 5,
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text>{getMonthName(monthIndex)}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      
    </>
  );
}
