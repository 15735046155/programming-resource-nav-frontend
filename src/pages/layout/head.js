import React, { useState, useEffect } from 'react';
import { Tag, Input } from 'antd';

import LoginModal from '@/components/login-modal';

const Head = ({ cb }) => {
  const [selectedTags, setSelectedTags] = useState('video'); // 选中tag
  const [keyword, setKeyword] = useState(''); // 搜索关键词
  const [loginModalVisible, setLoginModalVisible] = useState(false); // 登录弹窗
  const tagsData = [{
    key: 'video',
    value: '视频'
  }, {
    key: 'text',
    value: '文章'
  }];

  const handleCloseModal = () => {
    setLoginModalVisible(false);
  }
  const handleOk = (data) => {
    setLoginModalVisible(false);
  }

  useEffect(() => {
    cb({ keyword, selectedTags });
  }, [selectedTags, keyword]);

  return (
    <div className='head-container'>
      <div className='head-contents width-1220'>
        <div className='head-left'>
          <img className='head-logo' src="https://s.17win.com/snack/115/65a66a4310cd42a3816b3d3b82df293e.png" />
          <div className='head-menu'>
            {
              tagsData.map((tag) => (
                <Tag.CheckableTag
                  key={tag.key}
                  checked={selectedTags.includes(tag.key)}
                  onChange={() => setSelectedTags(tag.key)}
                >
                  {tag.value}
                </Tag.CheckableTag>
              ))
            }
          </div>
        </div>
        <div className='head-right'>
          <Input.Search
            placeholder="编程资源导航"
            onSearch={(value) => setKeyword(value)}
            style={{ width: 200 }}
            allowClear
          />
          <div className='head-login' onClick={() => setLoginModalVisible(true)}>
            登录
          </div>
        </div>
      </div>
      <LoginModal
        visible={loginModalVisible}
        setLoginModalVisible={(v) => setLoginModalVisible(v)}
        onCancel={handleCloseModal}
        onOk={handleOk}
      />
    </div>
  );
};
export default Head;
