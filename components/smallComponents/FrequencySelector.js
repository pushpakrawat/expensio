import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectFrequency } from '../../redux/actions/expenseActions'; // Import your Redux action

const FrequencySelector = () => {
  const dispatch = useDispatch();
  const selectedFrequencyIndex = useSelector(state => state.selectedFrequencyIndex); // Replace with your Redux state selector

  const handleFrequencySelection = (index) => {
    dispatch(selectFrequency(index+1)); // Dispatch your Redux action to update the selected frequency index
  };

  const renderFrequencyButtons = () => {
    const frequencies = ['1 month', '2 months', '3 months', '4 months', '5 months', '6 months', '7 months', '8 months', '9 months', '10 months', '11 months', '12 months'];

    return frequencies.map((frequency, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.frequencyButton,
          selectedFrequencyIndex === index && styles.selectedFrequencyButton,
        ]}
        onPress={() => handleFrequencySelection(index)}
      >
        <Text style={styles.buttonText}>{frequency}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {renderFrequencyButtons()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  frequencyButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedFrequencyButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default FrequencySelector;
