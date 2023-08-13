import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomOptionsCode from './CustomOptionsCode';

const CustomOptionsStructure = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <View>
      <Text>Select Expense Type:</Text>
      
      <CustomOptionsCode showDatePicker={toggleDatePicker} />
      
      {/* Render the date picker when showDatePicker is true */}
      {showDatePicker && <CustomOptionsCode showDatePicker={toggleDatePicker} />}
    </View>
  );
};

export default CustomOptionsStructure;
