import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBrrIBG2gjPXUPu5vnlaMK-WHs1tB6Tnz8",
  authDomain: "bloombuddy-8b426.firebaseapp.com",
  databaseURL: "https://bloombuddy-8b426-default-rtdb.firebaseio.com",
  projectId: "bloombuddy-8b426",
  storageBucket: "bloombuddy-8b426.appspot.com",
  messagingSenderId: "460239435748",
  appId: "1:460239435748:web:42886555307210eacdb9f1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
