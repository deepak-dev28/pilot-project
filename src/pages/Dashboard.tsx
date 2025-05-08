import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Dashboard: React.FC = () => {
  const items = useSelector((s: RootState) => s.menu);
  const categories = Array.from(new Set(items.map((i) => i.category)));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Total Items: {items.length}</div>
        <div className="p-4 bg-white rounded shadow">
          Categories: {categories.length}
         </div>
      </div>
    </div>
  );
};

export default Dashboard;