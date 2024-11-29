import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from '../pages/userList';
import UserDetail from '../pages/userDetail';
import Admin from '../pages/admin';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
