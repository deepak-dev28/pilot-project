// src/components/organisms/Layout.tsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar visible={drawerVisible} onClose={() => setDrawerVisible(false)} />

      <div className="flex-1 md:ml-64 flex flex-col w-screen">
        <Header onMenuClick={() => setDrawerVisible(true)} />
        <main className="flex-1 p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
