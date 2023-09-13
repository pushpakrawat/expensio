import { FIREBASE_DB } from "./firebaseconfig";
import { useDispatch } from "react-redux";
import { setDataLoaded } from "./redux/actions/expenseActions";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

// GET EXPENSES
export const getExpensesFromFirestore = async () => {
  try {
    const expensesCollectionRef = collection(FIREBASE_DB, "expenses");
    const querySnapshot = await getDocs(expensesCollectionRef);
    const expenses = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Firebase Utils - sending expenses: ", expenses);
    return expenses;
  } catch (error) {
    console.error("Error fetching expenses from Firestore: ", error);
    throw error;
  }
};
// ADD EXPENSES
export const addExpenseToFirestore = async (expense) => {
  console.log("Firebase Utils - expense sent: ", expense);
  try {
    const expensesCollectionRef = collection(FIREBASE_DB, "expenses");
    const docRef = await addDoc(expensesCollectionRef, expense);
    console.log("Expense added successfully to Firestore.");
    return docRef.id;
  } catch (error) {
    console.error("Error adding expense to Firestore: ", error);
    throw error;
  }
};

//UPDATE EXPENSES
export const updateExpenseInFirestore = async (expenseId, updatedData) => {
  try {
    const expenseDocRef = doc(FIREBASE_DB, "expenses", expenseId);
    await updateDoc(expenseDocRef, updatedData);
    console.log("Expense updated successfully in Firestore.");
  } catch (error) {
    console.error("Error updating expense in Firestore: ", error);
    throw error;
  }
};

//DELETE EXPENSES
export const deleteExpenseFromFirestore = async (expenseId) => {
  try {
    const expenseDocRef = doc(FIREBASE_DB, "expenses", expenseId);
    await deleteDoc(expenseDocRef);
    console.log("Expense deleted successfully from Firestore.");
  } catch (error) {
    console.error("Error deleting expense from Firestore: ", error);
    throw error;
  }
};
