// RegistrationCode.js
import { registerUserInFirestore } from "../../firebaseUtils"; // Import the registration function
import { registerUserSuccess } from "../../redux/actions/userActions";
import { FIREBASE_AUTH } from "../../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const auth = FIREBASE_AUTH;
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
