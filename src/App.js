import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/signUp" element={<SignUp />} /> */}
        {/* <Route path="/signIn" element={<SignIn />} /> */}
        {/* <Route path="/home" element={<Landing />} /> */}
        {/* <Route path="/home/*" element={<Landing />} /> */}
      </Routes>
    </Router>
  );
}


export default App;

// backgroundImage: `url(${image1})`,
