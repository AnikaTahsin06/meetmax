import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import Feed from './pages/Feed/Feed';
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} /> {/* Redirect to authentication by default */}
        <Route path="/auth/*" element={<Authentication />} />
        <Route path="/feed/*" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
