// RegistrationCode.js
import { signInWithPopup} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_PROVIDER  } from "../../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const auth = FIREBASE_AUTH;
const provider = FIREBASE_PROVIDER;

export const signInWithGooglePopup = async () => {
  try {
    // Trigger Google Sign-In popup
    const result = await signInWithPopup(auth, provider);

    // You can access user information from the result object if needed
    const user = result.user;

    // Handle successful login (e.g., update state or navigate to the next screen)
    console.log('Logged in with Google:', user);
  } catch (error) {
    // Handle errors (e.g., display an error message to the user)
    console.error('Google Sign-In Error:', error.message);
  }
};

export const registerUser = (email, password, navigation) => {
  return async () => {
    try {
      const userDocId = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered with ID: ", userDocId);
      navigation.navigate('Loading');
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };
};


