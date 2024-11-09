import React, { useState, useEffect } from 'react';
import { Tag, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import UserLoginDom from '@/components/user-login-dom';

import './index.scss';

const Head = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(''); // 搜索关键词
  return (
    <div className='head-container'>
      <div className='head-contents width-1220 flex-between'>
        <div className="head-left flex-vcenter">
          <img onClick={() => navigate('/')} className='head-logo pointer' src="https://s.17win.com/snack/115/65a66a4310cd42a3816b3d3b82df293e.png" alt="logo" />
          <span>编程资源导航</span>
        </div>
        <div className='head-right'>
          <Input.Search
            placeholder="编程资源导航"
            onSearch={(value) => {
              setKeyword(value);
              navigate(`/?keywords=${value}`);
            }}
            style={{ width: 200 }}
            allowClear
          />
          <UserLoginDom />
        </div>
      </div>
    </div>
  );
};
export default Head;
