import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MiddleContent from '../../components/MiddleContent/MiddleContent';
import Layout from '../../components/Layout/Layout';
import Profile from '../../components/Layout/Profile';


const Feed = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MiddleContent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
};

export default Feed;
