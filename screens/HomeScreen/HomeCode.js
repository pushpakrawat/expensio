import React from 'react';
import { useSelector } from 'react-redux';
import HomeStructure from './HomeStructure';

const HomeCode = () => {
  const expenses = useSelector(state => state.expenses); // Get expenses from Redux store

  return (
    <HomeStructure expenses={expenses} />
  );
};

export default HomeCode;
