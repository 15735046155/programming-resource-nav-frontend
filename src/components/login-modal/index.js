import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox, Flex} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import SignInModal from '../sign-in-modal';

const LoginModal = ({ visible, setLoginModalVisible, onCancel, onOk }) => {
  const [form] = Form.useForm();
  const [registerVisible, setRegisterVisible] = useState(false);

  // 登录处理
  const handleOk = () => {
    form.validateFields().then(values => {
      // TODO：登录逻辑， 掉接口
      onOk(values);
      console.log(values);
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  // 关闭登录
  const handleCancel = () => {
    console.log('关闭登录');
    form.resetFields();
    onCancel();
  };
  // 去注册
  const onRegister = () => {
    form.resetFields();
    setRegisterVisible(true);
    setLoginModalVisible(false);
  }
  // 关闭注册弹窗
  const handleCloseModal = () => {
    setRegisterVisible(false);
  }
  // 注册成功
  const registerOk = () => {
    setRegisterVisible(false);
    setLoginModalVisible(true);
  }

  return (
    <div>
      <Modal
        open={visible}
        onCancel={handleCancel}
        okText="登录"
        cancelText="取消"
        maskClosable={false}
        width={400}
        footer={null}
        title="登录"
        style={{ textAlign: 'center' }}
      >
        <Form form={form} name="login">
          <Form.Item
            // label="账号"
            name="username"
            rules={[
              { required: true, message: '请输入账号' },
              { min: 3, max: 20, message: '账号长度应在3到20个字符之间' },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="请输入账号" />
          </Form.Item>

          <Form.Item
            // label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <a href="">忘记密码？</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" onClick={handleOk}>
              登录
            </Button>
            <a href="#" onClick={onRegister}>去注册</a>
          </Form.Item>
        </Form>
      </Modal>
      <SignInModal
        visible={registerVisible}
        onCancel={handleCloseModal}
        onOk={registerOk}
      />
    </div>
  );
};

export default LoginModal;