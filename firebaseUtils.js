import { FIREBASE_DB } from './firebaseconfig'; // Update the import path as needed
import { addDoc, collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';

// Function to add an expense to Firestore
export const addExpenseToFirestore = async (expense) => {
  try {
    const docRef = await addDoc(collection(FIREBASE_DB, 'expenses'), expense);
    return docRef.id;
  } catch (error) {
    console.error('Error adding expense to Firestore: ', error);
    throw error;
  }
};

// Function to retrieve expenses from Firestore
export const getExpensesFromFirestore = async () => {
  try {
    const snapshot = await getDocs(collection(FIREBASE_DB, 'expenses'));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching expenses from Firestore: ', error);
    throw error;
  }
};

// Function to update an expense in Firestore
export const updateExpenseInFirestore = async (expenseId, updatedData) => {
  try {
    const expenseDocRef = doc(FIREBASE_DB, 'expenses', expenseId);
    await updateDoc(expenseDocRef, updatedData);
    console.log('Expense updated successfully.');
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
    console.log('Expense deleted successfully.');
  } catch (error) {
    console.error('Error deleting expense from Firestore: ', error);
    throw error;
  }
};
