import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { setSelectedYear } from '../../redux/actions/expenseActions'; // Import your action creator

const YearSelector = () => {
  const currentYear = new Date().getFullYear();
  const selectedYear = useSelector(state => state.selectedYear); // Assuming selectedYear is stored in Redux store
  const dispatch = useDispatch();

  const yearsToShow = [currentYear, currentYear + 1, currentYear + 2];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.yearContainer}
      >
        {yearsToShow.map((year) => (
          <TouchableOpacity
            key={year}
            style={[
              styles.yearItem,
              year === selectedYear && styles.selectedYearItem,
            ]}
            onPress={() => dispatch(setSelectedYear(year))} // Dispatch action on year selection
          >
            <Text
              style={[
                styles.yearText,
                year === selectedYear && styles.selectedYearText,
              ]}
            >
              {year}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  yearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yearItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  selectedYearItem: {
    backgroundColor: '#007bff',
  },
  yearText: {
    fontSize: 16,
    color: '#333',
  },
  selectedYearText: {
    color: '#fff',
  },
});

export default YearSelector;
