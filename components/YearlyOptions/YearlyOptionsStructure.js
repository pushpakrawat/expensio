import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import YearlyOptionsCode from './YearlyOptionsCode';
import { setIsEnding } from '../../redux/actions/expenseActions';

const YearlyOptionsStructure = () => {
  const dispatch = useDispatch();
  const isEnding = useSelector(state => state.expense.isEnding);

  const toggleIsEnding = () => {
    dispatch(setIsEnding(!isEnding));
  };

  return (
    <View>
      <Text>Select Expense Type:</Text>
      <Switch value={isEnding} onValueChange={toggleIsEnding} />

      {isEnding && (
        <YearlyOptionsCode isEnding={isEnding} />
      )}
    </View>
  );
};

export default YearlyOptionsStructure;
