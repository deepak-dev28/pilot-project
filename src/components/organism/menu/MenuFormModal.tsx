import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, InputNumber, Select, Upload, Button } from 'antd';
import { UploadOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { MenuItem } from '../../../redux/slices/menuSlice';
import InputAtom from '../../atoms/input';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (item: Omit<MenuItem, 'id'>, id?: string) => void;
  initialValues: MenuItem | null;
}

const MenuFormModal: React.FC<Props> = ({ open, onClose, onSubmit, initialValues }) => {
  const [form] = Form.useForm();
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
      setImgUrl(initialValues.image);
    } else {
      form.resetFields();
      setImgUrl('');
    }
  }, [initialValues, form]);

  const handleUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = () => setImgUrl(reader.result as string);
    reader.readAsDataURL(file);
    return false;
  };

  const handleFinish = (values: any) => {
    const payload = { ...values, image: imgUrl };
    onSubmit(payload, initialValues?.id);
    form.resetFields();
    setImgUrl('');
  };

  const handleCancel = () => {
    onClose();
    form.resetFields();
    setImgUrl('');
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={() => form.submit()}
      okText="Save"
      title={initialValues ? 'Edit Item' : 'Add Item'}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <InputAtom />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select>
            {['Appetizers', 'Main Courses', 'Desserts', 'Drinks'].map((c) => (
              <Select.Option key={c} value={c}>
                {c}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber min={1} className="w-full" />
        </Form.Item>
        <Form.Item label="Image">
          <div className="flex flex-col items-start gap-4">
            <Upload
              beforeUpload={handleUpload}
              showUploadList={false}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>

            {imgUrl && (
              <div className="relative">
                <img
                  src={imgUrl}
                  alt="Uploaded"
                  className="h-20 w-20 object-cover rounded border"
                />
                <CloseCircleOutlined
                  onClick={() => setImgUrl('')}
                  className="absolute -top-2 -right-2 text-red-600 bg-white rounded-full cursor-pointer"
                  style={{ fontSize: 20 }}
                />
              </div>
            )}
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MenuFormModal;
