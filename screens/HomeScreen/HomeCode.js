import React, { useEffect } from "react";
import { View, ActivityIndicator, Text, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setDataLoaded, getExpenses } from "../../redux/actions/expenseActions";
import { useNavigation } from "@react-navigation/native";
import { getExpensesFromFirestore } from "../../firebaseUtils";
import HomeStructure from "./HomeStructure";

const HomeCode = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isDataLoaded = useSelector((state) => state.expense.isDataLoaded);
  const userId = useSelector((state) => state.expense.expenseDocId);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Loading Screen: Fetching data...");
      try {
        const expensesData = await getExpensesFromFirestore(userId);
        const expenses = expensesData.map((expense) => ({
          ...expense,
          date: new Date(expense.date.seconds * 1000),
          expenseEndDate: expense.expenseEndDate
            ? new Date(expense.expenseEndDate.seconds * 1000)
            : null,
        }));

        dispatch(getExpenses(expenses));
        dispatch(setDataLoaded(true)); // Indicate that data is loaded

        navigation.navigate("Home");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (!isDataLoaded) {
      fetchData();
    }
  }, [dispatch, isDataLoaded, navigation, userId]);

  return <HomeStructure />;
};

export default HomeCode;
