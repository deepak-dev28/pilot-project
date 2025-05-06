import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MenuFilters from '../../components/organism/menu/MenuFilters';
import MenuTable from '../../components/organism/menu/MenuTable';
import MenuFormModal from '../../components/organism/menu/MenuFormModal';
import { RootState } from '../../redux/store';
import { MenuItem } from '../../types/menu';
import { addItem, deleteItem, updateItem } from '../../redux/slices/menuSlice';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const MenuManagement: React.FC = () => {
  const menuItems = useSelector((s: RootState) => s.menu);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
      return matchesSearch && matchesCategory;
    });
  }, [menuItems, searchTerm, categoryFilter]);

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteItem(id));
  };

  const handleSubmit = (item: Omit<MenuItem, 'id'>, id?: string) => {
    if (id) dispatch(updateItem({ ...item, id, image: item.image || '' }));
    else dispatch(addItem({ ...item, image: item.image || '' }));
    setModalOpen(false);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section: Title + Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center md:text-left">
            Menu Management
          </h1>
          <Button type="primary" onClick={() => {
                setEditingItem(null);
                setModalOpen(true);
              }}>
        <PlusOutlined /> Add Item
      </Button>
        </div>
          <div className="w-full md:w-auto">
            <MenuFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              categories={[...new Set(menuItems.map((i) => i.category))]}
            />
          </div>

        <div className="overflow-x-auto">
          <MenuTable
            items={filteredItems}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <MenuFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialValues={editingItem ? { ...editingItem, image: editingItem.image || '' } : null}
      />
    </div>
  );
};

export default MenuManagement;
