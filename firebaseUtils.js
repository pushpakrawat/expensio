import { FIREBASE_DB } from './firebaseconfig';
import { useDispatch } from 'react-redux';
import { getExpenses } from './redux/actions/expenseActions';
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';

export const getExpensesFromFirestore = async () => {
  try {
    const expensesCollectionRef = collection(FIREBASE_DB, 'expenses'); 
    const querySnapshot = await getDocs(expensesCollectionRef);
    const expenses = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Firebase Utils - sending expenses: ", expenses)
    return expenses;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching expenses from Firestore: ', error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export const addExpenseToFirestore = async (expense) => {
  console.log("Firebase Utils - expense sent: ", expense);
  try {
    const expensesCollectionRef = collection(FIREBASE_DB, 'expenses');
    await addDoc(expensesCollectionRef, expense); // Use addDoc to automatically generate a document ID
    console.log('Expense added successfully to Firestore.');
    return docRef.id;
  } catch (error) {
    console.error('Error adding expense to Firestore: ', error);
    throw error;
  }
};

// Function to update an expense in Firestore
export const updateExpenseInFirestore = async (expenseId, updatedData) => {
  try {
    const expenseDocRef = doc(FIREBASE_DB, 'expenses', expenseId);
    await updateDoc(expenseDocRef, updatedData);
    console.log('Expense updated successfully in Firestore.');

    // Fetch updated expenses after a successful update
    // await getExpensesFromFirestore();
  } catch (error) {
    console.error('Error updating expense in Firestore: ', error);
    throw error;
  }
};

// Function to delete an expense from Firestore
export const deleteExpenseFromFirestore = async (expenseId) => {
  try {
    const expenseDocRef = doc(FIREBASE_DB, 'expenses', expenseId);
    await deleteDoc(expenseDocRef);
    console.log('Expense deleted successfully from Firestore.');

    // Fetch updated expenses after a successful deletion
    // await getExpensesFromFirestore();
  } catch (error) {
    console.error('Error deleting expense from Firestore: ', error);
    throw error;
  }
};