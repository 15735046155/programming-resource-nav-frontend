import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';

const ReviewModal = ({ visible, title, placeholder, onOk, onCancel }) => {
  const [reason, setReason] = useState('');

  const handleOk = () => {
    onOk(reason);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      title={title}
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
    >
      <p>请输入{title}的原因：</p>
      <Input
        placeholder={placeholder}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
    </Modal>
  );
};

export default ReviewModal;