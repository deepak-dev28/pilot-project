// src/components/organisms/Sidebar.tsx
import React from 'react';
import { Drawer, Menu } from 'antd';
import {
  DashboardOutlined,
  AppstoreAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'logout') {
      dispatch(logout());
      navigate('/login');
    } else {
      navigate(`/${key}`);
    }
    onClose();
  };

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: 'menu', icon: <AppstoreAddOutlined />, label: 'Menu Management' },
    { key: 'logout', icon: <LogoutOutlined />, label: 'Logout' },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 h-screen fixed bg-gray-900 text-white">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </div>

      {/* Mobile drawer */}
      <Drawer
        title="Admin Panel"
        placement="left"
        onClose={onClose}
        open={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          onClick={handleMenuClick}
          defaultSelectedKeys={['dashboard']}
          items={menuItems}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
