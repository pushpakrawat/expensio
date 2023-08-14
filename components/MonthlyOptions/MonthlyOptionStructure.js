import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MonthlyOptionCode from './MonthlyOptionCode';
import { setIsEnding } from '../../redux/actions/expenseActions';

const MonthlyOptionStructure = () => {
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
        <MonthlyOptionCode isEnding={isEnding} />
      )}
    </View>
  );
};

export default MonthlyOptionStructure;
