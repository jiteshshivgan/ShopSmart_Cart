import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7hOWLf3KEb9Xrd00ucD_p6W7YZI-mJZ4",
  authDomain: "cart-6afc8.firebaseapp.com",
  projectId: "cart-6afc8",
  storageBucket: "cart-6afc8.appspot.com",
  messagingSenderId: "559285632730",
  appId: "1:559285632730:web:a898c87ab1c8e4cd4fefe3"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default db;