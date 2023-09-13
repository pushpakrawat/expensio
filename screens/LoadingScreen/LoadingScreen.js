import React, { useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setDataLoaded, getExpenses } from "../../redux/actions/expenseActions";
import { useNavigation } from "@react-navigation/native";
import { getExpensesFromFirestore } from "../../firebaseUtils";

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isDataLoaded = useSelector((state) => state.expense.isDataLoaded);

  useEffect(() => {
    console.log("Loading...")
    const fetchData = async () => {
      try {
        const expensesData = await getExpensesFromFirestore();
        const expenses = expensesData.map((expense) => ({
          ...expense,
          date: new Date(expense.date.seconds * 1000),
          expenseEndDate: expense.expenseEndDate
            ? new Date(expense.expenseEndDate.seconds * 1000)
            : null,
        }));

        dispatch(getExpenses(expenses));
        dispatch(setDataLoaded(true)); // Indicate that data is loaded

        navigation.replace("Home");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (!isDataLoaded) {
      fetchData();
    }
  }, [dispatch, isDataLoaded, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Loading your expenses...</Text>
    </View>
  );
};

export default LoadingScreen;
