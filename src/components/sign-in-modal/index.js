import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SignInModal = ({ visible, onCancel, onOk }) => {
  const [form] = Form.useForm();
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleOk = () => {
    form.validateFields().then(async(values) => {
      if (!isAgreed) {
        Modal.warning({
          title: '警告',
          content: '请同意用户协议',
        });
        return;
      }
      Modal.confirm({ title: '注册成功', content: '是否前往登录页面？', onOk, onCancel});
      // TODO：注册逻辑，掉接口
      // const result = await register(values.username, values.password, values.confirmPassword);
      // if (result.success) {
      //   onOk(values);
      // } else {
      //   Modal.error({ title: '注册失败', content: result.message });
      // }
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="用户注册"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="注册"
      cancelText="取消"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="账号"
          name="username"
          rules={[
            { required: true, message: '请输入账号' },
            { min: 3, max: 20, message: '账号长度应在3到20个字符之间' },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[
            { required: true, message: '请再次输入密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不一致'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="请再次输入密码" />
        </Form.Item>

        <Form.Item>
          <Checkbox checked={isAgreed} onChange={e => setIsAgreed(e.target.checked)}>
            我已阅读并同意<a href="#">用户协议</a>
          </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignInModal;