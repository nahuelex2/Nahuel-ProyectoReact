import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoJc_7hfOart9PkRAfvvkG8MoGMBOPhk8",
  authDomain: "ecommercenahuel-c40f8.firebaseapp.com",
  projectId: "ecommercenahuel-c40f8",
  storageBucket: "ecommercenahuel-c40f8.appspot.com",
  messagingSenderId: "149097721812",
  appId: "1:149097721812:web:567aab080d758f3ac73041"
};


initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
