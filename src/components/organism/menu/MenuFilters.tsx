import React from 'react';
import { Input, Select } from 'antd';

interface Props {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  categoryFilter: string;
  setCategoryFilter: (val: string) => void;
  categories: string[];
}

const MenuFilters: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  categories,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
      <div className="flex flex-col ">
        <label className="text-sm font-medium text-gray-700 mb-1">Search</label>
        <Input
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-64"
          allowClear
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Category</label>
        <Select
          placeholder="Filter by category"
          value={categoryFilter || undefined}
          onChange={(val) => setCategoryFilter(val || '')}
          className="w-64"
          allowClear
        >
          {categories.map((c) => (
            <Select.Option key={c} value={c}>
              {c}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default MenuFilters;
