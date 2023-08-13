import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useMonthYearSelectorLogic } from './MonthYearSelectorCode';
import styles from './MonthYearSelectorStyle';

const MonthYearSelectorStructure = () => {
  const {
    currentMonthName,
    currentYear,
    handlePrevMonth,
    handleNextMonth,
    handleGoToCurrentMonth,
  } = useMonthYearSelectorLogic();

  // console.log('Structure - Current Month:', currentMonth);
  // console.log('Structure - Current Year:', currentYear);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrevMonth} style={styles.button}>
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{currentMonthName} {currentYear}</Text>
      </View>

      <TouchableOpacity onPress={handleNextMonth} style={styles.button}>
        <AntDesign name="right" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoToCurrentMonth} style={styles.goToCurrentButton}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MonthYearSelectorStructure;
