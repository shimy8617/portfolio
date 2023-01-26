import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyBM2Tc3sBQi08CuTcQGYvWzMCJUnSIHAKw",
  authDomain: "my-portfolio-a95ca.firebaseapp.com",
  projectId: "my-portfolio-a95ca",
  storageBucket: "my-portfolio-a95ca.appspot.com",
  messagingSenderId: "559201247755",
  appId: "1:559201247755:web:b8657dab6f7d768b535d0e",
  measurementId: "G-TR3YKPP7Z5",
};

const fire = initializeApp(firebaseConfig);

export default fire;

const auth = getAuth(fire);
onAuthStateChanged(auth, (user) => {
  // Check for user status
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
