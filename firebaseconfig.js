import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLtwsdhOjRpbWUhCC3fhKKgUi5rHsJBXY",
    authDomain: "expensio-60338.firebaseapp.com",
    projectId: "expensio-60338",
    storageBucket: "expensio-60338.appspot.com",
    messagingSenderId: "643056105268",
    appId: "1:643056105268:web:79cf18aa349969369dd761"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_DB =  getFirestore(FIREBASE_APP, { persistence: true });
export const FIREBASE_DB =  getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)

// // Initialize Firebase Auth with persistence
// const auth = initializeAuth(FIREBASE_APP, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage) // Use getReactNativePersistence
//   });
  
//   // Check if AsyncStorage is available
//   ReactNativeAsyncStorage.getItem('@firebase:authUser')
//     .then(() => {
//       // AsyncStorage is available, set persistence to LOCAL
//       getReactNativePersistence(auth, 'LOCAL'); // Use 'LOCAL' for persistence
//     })
//     .catch(() => {
//       // AsyncStorage is not available, use default persistence
//       getReactNativePersistence(auth, 'SESSION'); // Use 'SESSION' for default
//     });
  
//   export const FIREBASE_AUTH = auth;
