import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCec_gBx0pG8tK575eykBYEmRmA5_8zd_k",
  authDomain: "chat-app2-915b1.firebaseapp.com",
  projectId: "chat-app2-915b1",
  storageBucket: "chat-app2-915b1.appspot.com",
  messagingSenderId: "159753848303",
  appId: "1:159753848303:web:4e1820375b4ec2a713a21a"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
