import { Button, Input, Select, Table, Image, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import { RootState } from '../../redux/store';
import { deleteItem } from '../../redux/slices/menuSlice';

const MenuList = ({ onEdit }: { onEdit: (id: string) => void }) => {
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredMenu = menu.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (!categoryFilter || item.category === categoryFilter)
  );

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Input placeholder="Search" onChange={e => setSearch(e.target.value)} />
        <Select placeholder="Filter by Category" allowClear style={{ width: 200 }}
          onChange={val => setCategoryFilter(val)}
          options={[...new Set(menu.map(m => m.category))].map(c => ({ label: c, value: c }))} />
      </Space>
      <Table dataSource={filteredMenu} rowKey="id">
        <Table.Column title="Image" dataIndex="image" render={(text) => text && <Image width={50} src={text} />} />
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Description" dataIndex="description" />
        <Table.Column title="Price" dataIndex="price" render={(p) => `$${p.toFixed(2)}`} />
        <Table.Column title="Category" dataIndex="category" />
        <Table.Column title="Actions" render={(_, record) => (
          <Space>
            <Button onClick={() => onEdit(record.id)}>Edit</Button>
            <Button danger onClick={() => dispatch(deleteItem(record.id))}>Delete</Button>
          </Space>
        )} />
      </Table>
    </>
  );
};

export default MenuList;