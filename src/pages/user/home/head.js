import React, { useState, useEffect } from 'react';
import { Tag, Input } from 'antd';
import { getUrlQuery } from '@/utils/getUrlQuery';
import UserLoginDom from '@/components/user-login-dom';
import { sourceTypeTagData } from '@/constants';

const Head = ({ cb, select }) => {
  const [selectedTags, setSelectedTags] = useState(select.selectedTags); // 选中tag
  const [keyword, setKeyword] = useState(select.keywords || getUrlQuery().keywords || ''); // 搜索关键词

  useEffect(() => {
    cb({ keyword, selectedTags });
  }, [selectedTags, keyword]);

  return (
    <div className='head-container'>
      <div className='head-contents width-1220'>
        <div className='head-left'>
          <img onClick={() => window.location.href = '/'} alt="logo" className='head-logo pointer' src="https://s.17win.com/snack/115/65a66a4310cd42a3816b3d3b82df293e.png" />
          <div className='head-menu'>
            {
              sourceTypeTagData.map((tag) => (
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
            defaultValue={keyword}
            onSearch={(value) => setKeyword(value)}
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
