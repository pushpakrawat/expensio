import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';


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
export const FIREBASE_DB =  getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);    
