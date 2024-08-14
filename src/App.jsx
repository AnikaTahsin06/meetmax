import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Feed from './pages/Feed/Feed';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Feed />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
