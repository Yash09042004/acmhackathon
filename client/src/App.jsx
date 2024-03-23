import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import Login from './Login';
import HomePage from './HomePage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'; 
import { getStorage, ref, uploadBytes } from "firebase/storage";
import ImageClassifier from './ImageClassifier'


const firebaseConfig = {
  apiKey: "AIzaSyC-f4_eyJA1ABl2SXbrJslBtfFNNkjII6A",
  authDomain: "soil-9f7c8.firebaseapp.com",
  projectId: "soil-9f7c8",
  storageBucket: "soil-9f7c8.appspot.com",
  messagingSenderId: "380169557389",
  appId: "1:380169557389:web:bc4afcc4b47a3c2b6599c4",
  measurementId: "G-0EESH997J1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const userEmail = user.email;
    const storageRef = ref(storage, `users/${userEmail}/${file.name}`);
    await uploadBytes(storageRef, file);
    console.log("File uploaded successfully!");
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup user={user} handleLogout={handleLogout} />} />
          <Route path='/login' element={<Login user={user} handleLogout={handleLogout} />} />
          <Route path='/home' element={<HomePage user={user} handleFileUpload={handleFileUpload} />} />
          <Route path='/classify' element= {<ImageClassifier />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
