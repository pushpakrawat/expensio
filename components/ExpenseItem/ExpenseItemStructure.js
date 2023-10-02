import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native"; // Import Alert
import { useExpenseItemLogic, confirmDelete } from "./ExpenseItemCode";
import styles from "./ExpenseItemStyle";
import MarkPaidButton from "../smallComponents/MarkPaidButton";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/Entypo";
import Icon3 from "react-native-vector-icons/Fontisto";

const ExpenseItemStructure = ({ expense }) => {
  const navigation = useNavigation();
  const { formattedDate, formattedDueDate, confirmDelete } =
    useExpenseItemLogic(expense);
  const { id, title, amount, isRecurring } = expense;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.firstBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>₹{amount}</Text>
        </View>
        <View style={styles.secondBox}>
          <Icons
            name="cycle"
            size={18}
            color={isRecurring ? "#f5d442" : "#ccc"}
          />
        </View>
        <View style={styles.thirdBox}>
          <Text style={styles.dueDate}>
            <Icon3 name="date" size={15} color="red"/> {formattedDueDate}
          </Text>
        </View>
        <View style={styles.fourthBox}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => confirmDelete(expense.id)}
          >
            <Icon name="trash" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.fifthBox}>
          <MarkPaidButton expense={expense} style={styles.markPaidButton} />
        </View>
      </View>
    </View>
  );
};

export default ExpenseItemStructure;
