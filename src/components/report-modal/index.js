import React, { useState } from 'react';
import { Form, Input, Select, Button, Modal, message } from 'antd';

const { Option } = Select;

/**
 * 
 * @param {id} 文章id
 * @returns 
 */
const ReportModal = ({ visible, onCancel, onOk, id }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    form.validateFields().then(async (values) => {
      setLoading(true);
      try {
        // TODO：调用举报接口，需要帐户id, id
        // await onReport(values);
        message.success('举报成功！', values, id);
        form.resetFields(); // 提交成功后重置表单
        onOk(); // 关闭弹窗
      } catch (error) {
        message.error('举报失败，请稍后再试。');
      } finally {
        setLoading(false);
      }
    }).catch((info) => {
      console.log('Validation failed:', info);
    });
  };

  return (
    <Modal
      title="用户举报"
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="提交"
      cancelText="取消"
      confirmLoading={loading}
      maskClosable={false}
    >
      <Form
        form={form}
        name="report_form"
        layout="vertical"
      >
        <Form.Item
          label="举报类型"
          name="type"
          rules={[{ required: true, message: '请选择举报类型!' }]}
        >
          <Select placeholder="请选择举报类型">
            <Option value="spam">垃圾信息</Option>
            <Option value="offensive">不雅内容</Option>
            <Option value="illegal">非法内容</Option>
            <Option value="other">其他</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="详细描述"
          name="desc"
          rules={[{ required: true, message: '请填写详细描述!' }]}
        >
          <Input.TextArea rows={4} placeholder="请详细描述您的举报内容" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReportModal;