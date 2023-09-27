import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, setDoc } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebaseconfig";
import { setUserId } from "../../redux/actions/userActions";
import { setExpenseDocId } from "../../redux/actions/expenseActions";

const auth = FIREBASE_AUTH;

export const registerUser = (email, password, navigation, dispatch) => {
  return async () => {
    try {
      // Register the user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Create a reference to the "users" collection
      const usersCollectionRef = collection(FIREBASE_DB, "users");

      // Add a document to the "users" collection with user's UID as the document ID
      const userDocRef = doc(usersCollectionRef, user.uid);
      await setDoc(userDocRef, {});

      // Create the "userData" subcollection within the user's document
      const userDataCollectionRef = collection(userDocRef, "userData");
      const userDataDocRef = doc(userDataCollectionRef);

      // Add the email to the "userData" subcollection
      await setDoc(userDataDocRef, {
        email: user.email,
        // Add other user data as needed
      });

      // Create the "userExpenses" subcollection within the user's document
      collection(userDocRef, "userExpenses");


      console.log("User registered with ID: ", user.uid);

      // Dispatch actions to update the Redux states with user and expense document IDs
      dispatch(setUserId(user.uid)); 
      dispatch(setExpenseDocId(user.uid));

      navigation.navigate("Loading");
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };
};
