import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseconfig";


export const loginUser = (email, password, navigation, dispatch) => {
  
  return async () => {
    const auth = FIREBASE_AUTH;
    try {
      console.log("Logging in...");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Login successful:", user);
      
      dispatch(setUserId(user.uid)); 
      dispatch(setExpenseDocId(user.uid));
      
      navigation.navigate('Loading');
    } catch (error) {
      console.error("Login error:", error);
    }
  };
};
