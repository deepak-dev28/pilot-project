import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import ButtonAtom from '../../components/atoms/button';
import InputAtom from '../../components/atoms/input';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';
import { Form, Input } from 'antd';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';

interface LoginFormValues {
  username: string;
  password: string;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = useForm();
  const isAuth = useSelector((s: RootState) => s.auth.isAuthenticated);


  useEffect(()=>{
    if(isAuth){
        navigate('/dashboard');
    }
  },[])

  const onFinish = ({ username, password }: LoginFormValues) => {
    const errors = [];
  
    if (username !== 'admin') {
      errors.push({
        name: 'username',
        errors: ['Invalid username'],
      });
    }
  
    if (password !== 'admin') {
      errors.push({
        name: 'password',
        errors: ['Invalid password'],
      });
    }
  
    if (errors.length > 0) {
      form.setFields(errors);
    } else {
      dispatch(login());
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#111827] px-4">
      <div className="w-full max-w-md bg-[#1F2937] p-8 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white">Sign in to Admin Dashboard</h3>
        </div>

        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-700" />
          <span className="px-4 text-gray-500 text-sm">with username and password as admin</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <Form<LoginFormValues>
          name="login"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputAtom
              placeholder="Username"
              className="bg-[#374151] text-white border-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              className="bg-[#374151] text-white border-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item>
            <ButtonAtom
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
            >
              Sign In
            </ButtonAtom>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
