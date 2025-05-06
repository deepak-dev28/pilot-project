import React from 'react';
import { Table, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { MenuItem } from '../../../redux/slices/menuSlice';

interface Props {
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
  onDelete: (id: string) => void;
}

const MenuTable: React.FC<Props> = ({ items, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      className: 'whitespace-nowrap',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      className: 'whitespace-nowrap',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
      className: 'whitespace-nowrap',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (src: string) => (
        <img
          src={src}
          alt="Menu Item"
          className="h-12 w-12 object-cover rounded"
        />
      ),
      className: 'whitespace-nowrap',
    },
    {
      title: 'Actions',
      render: (_: any, item: MenuItem) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => onEdit(item)}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            danger
            onClick={() => onDelete(item.id)}
          />
        </Space>
      ),
      className: 'whitespace-nowrap',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table
        dataSource={items}
        rowKey="id"
        columns={columns}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          responsive: true,
        }}
        className="min-w-full"
      />
    </div>
  );
};

export default MenuTable;
