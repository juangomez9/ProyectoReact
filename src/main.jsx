import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-ZtNUaChGtslR4ib3qMBLjpM1d0aKqPM",
  authDomain: "distri-ecommerce.firebaseapp.com",
  projectId: "distri-ecommerce",
  storageBucket: "distri-ecommerce.appspot.com",
  messagingSenderId: "700239696130",
  appId: "1:700239696130:web:6a2bca23782e61d6bcb21b",
  measurementId: "G-9EWXZ42GP7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
