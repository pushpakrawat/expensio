import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataLoaded } from "../../redux/actions/expenseActions";
import { getExpensesFromFirestore } from "../firebaseUtils";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";

const LoadingScreenCode = () => {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector((state) => state.loading.isDataLoaded); // Read the data loaded state from Redux

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getExpensesFromFirestore();
        // Dispatch an action to set data loaded in Redux
        dispatch(setDataLoaded(true));
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle errors here
      }
    };

    fetchData();
  }, [dispatch]); // Include dispatch as a dependency

  // Conditionally render LoadingScreen based on isDataLoaded
  return isDataLoaded ? null : <LoadingScreen />;
};

export default LoadingScreenCode;
