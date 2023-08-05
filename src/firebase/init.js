import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtwl-F0eRPrGUikxfSWX6PROX_yDA7Jng",
  authDomain: "test4vue-30dd3.firebaseapp.com",
  projectId: "test4vue-30dd3",
  storageBucket: "test4vue-30dd3.appspot.com",
  messagingSenderId: "485340140005",
  appId: "1:485340140005:web:56ade8dcf7281b7e93df0c"
};


// init firebase
initializeApp(firebaseConfig)

// init & export firestore service
export const db = getFirestore()
export const auth = getAuth()
