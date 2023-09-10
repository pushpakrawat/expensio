import { FIREBASE_DB } from './firebaseconfig';
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';

// // Define the updateCallback function
// const updateCallback = (expenses) => {
//   console.log('Expenses updated in real-time:', expenses);
// };

// Function to retrieve expenses from Firestore with a real-time listener
export const getExpensesFromFirestore = async () => {
  try {
    const expensesCollectionRef = collection(FIREBASE_DB, 'expenses');

    // Set up a real-time listener
    const unsubscribe = onSnapshot(expensesCollectionRef, (querySnapshot) => {
      const expenses = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("firebaseUtils - Data retrieved: ", data);

        // Convert Firestore Timestamps to JavaScript Date objects
        const date = data.date.toDate();

        // Check if expenseEndDate exists and is not an empty string
        const expenseEndDate =
          data.expenseEndDate && data.expenseEndDate !== ""
            ? data.expenseEndDate.toDate()
            : "";

            data.date = date;
            data.expenseEndDate = expenseEndDate;
          
            // Return the updated data object
            console.log("firebaseUtils - Data converted: ", data);
            return {
              id: doc.id,
              ...data,
            };
      });
      // Use the updateCallback to notify your application of changes
      // updateCallback(expenses);
    });

    // Return the unsubscribe function to stop listening when needed
    return unsubscribe;
  } catch (error) {
    console.error('Error fetching expenses from Firestore: ', error);
    throw error;
  }
};

export const addExpenseToFirestore = async (expense) => {
  console.log("Firebase Utills - expeses sent : ", expense)
  try {
    const docRef = doc(FIREBASE_DB, 'expenses', expense.id);
    await setDoc(docRef, expense);
    console.log('Expense added successfully to Firestore.');

    // Fetch updated expenses after a successful addition
    await getExpensesFromFirestore();

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
    await getExpensesFromFirestore();
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
    await getExpensesFromFirestore();
  } catch (error) {
    console.error('Error deleting expense from Firestore: ', error);
    throw error;
  }
};