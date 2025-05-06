import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow px-4 sm:px-6 md:px-8 py-4 sticky top-0 z-10 flex items-center justify-between md:justify-start md:flex-col">
      <button
        className="md:hidden text-gray-700 absolute left-4"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <MenuOutlined style={{ fontSize: '20px' }} />
      </button>

      <div className="w-full">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-center">
          Restaurant Admin Panel
        </h1>
      </div>
    </header>
  );
};

export default Header;
