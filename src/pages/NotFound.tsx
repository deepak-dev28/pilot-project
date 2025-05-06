// src/pages/NotFound.tsx
import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl mb-4">404 - Not Found</h1>
      <Button onClick={() => navigate('/dashboard')}>Go Home</Button>
    </div>
  );
};

export default NotFound;
