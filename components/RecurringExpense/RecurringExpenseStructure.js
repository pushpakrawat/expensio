import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./RecurringExpenseStyles";
import { useSelector, useDispatch } from "react-redux";
import { selectFrequency } from "../../redux/actions/expenseActions";
import MonthlyOptionStructure from '../MonthlyOptions/MonthlyOptionStructure';
import YearlyOptionsStructure from '../YearlyOptions/YearlyOptionsStructure';
import CustomOptionsStructure from '../CustomOptions/CustomOptionsStructure';


const RecurringExpenseStructure = () => {
  const selectedFrequency = useSelector(
    (state) => state.expense.selectedFrequency
  );

  const dispatch = useDispatch();

  const handleFrequencySelect = (frequency) => {
    dispatch(selectFrequency(frequency));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Recurring Frequency</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedFrequency === "Monthly" ? styles.selectedOption : null,
          ]}
          onPress={() => handleFrequencySelect("Monthly")}
        >
          <Text
            style={[
              styles.optionText,
              selectedFrequency === "Monthly"
                ? styles.selectedOptionText
                : null,
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedFrequency === "Yearly" ? styles.selectedOption : null,
          ]}
          onPress={() => handleFrequencySelect("Yearly")}
        >
          <Text
            style={[
              styles.optionText,
              selectedFrequency === "Yearly" ? styles.selectedOptionText : null,
            ]}
          >
            Yearly
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedFrequency === "Custom" ? styles.selectedOption : null,
          ]}
          onPress={() => handleFrequencySelect("Custom")}
        >
          <Text
            style={[
              styles.optionText,
              selectedFrequency === "Custom" ? styles.selectedOptionText : null,
            ]}
          >
            Custom
          </Text>
        </TouchableOpacity>
      </View>

      {selectedFrequency === "Monthly" && <MonthlyOptionStructure />}
      {selectedFrequency === "Yearly" && <YearlyOptionsStructure />} 
      {selectedFrequency === "Custom" && <CustomOptionsStructure />} 
    </View>
  );
};

export default RecurringExpenseStructure;
