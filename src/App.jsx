import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import Feed from './pages/Feed/Feed';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth/*" element={<Authentication />} />
        <Route element={<ProtectedRoutes />}>
            <Route path="/feed/*" element={<Feed />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
