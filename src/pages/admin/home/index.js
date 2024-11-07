import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // TODO：掉用登录接口
      // const response = await axios.post('/api/login', values);
      // if (response.data.success) {
      //   message.success('登录成功！');
      //   // 这里可以进行路由跳转或其他操作
      //   console.log('登录成功:', response.data);
      // } else {
      //   message.error(response.data.message || '登录失败，请检查用户名和密码');
      // }
      navigate('/examine-list');
    } catch (error) {
      message.error('登录失败，请检查网络连接或稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex-column flex-vcenter flex-center" style={{ height: '100vh' }}>
      <div className="fc-brand fs-30 mb-50">编程资源系统导航-管理端</div>
      <Form
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        style={{ width: 300 }}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;