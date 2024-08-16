import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MiddleContent from '../../components/Layout/MiddleContent';
import Layout from '../../components/Layout/Layout';
import Profile from '../../components/Layout/Profile';


const Feed = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   // Perform logout logic here
  //   navigate('/auth/signin');
  //   <button onClick={handleLogout}>Logout</button>
  // };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MiddleContent />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </Layout>
  );
};

export default Feed;
