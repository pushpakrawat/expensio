import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseconfig";


export const loginUser = (email, password, navigation) => {
  
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
      navigation.navigate('Loading');
      console.log("Login successful:", user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
};
