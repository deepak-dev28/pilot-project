import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Layout from '../components/organism/Layout';
import Login from '../pages/login/Login';
import Dashboard from '../pages/Dashboard';
import MenuManagement from '../pages/menu/MenuManagement';

const AppRoutes: React.FC = () => {
  const isAuth = useSelector((s: RootState) => s.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {isAuth ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="menu" element={<MenuManagement />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
