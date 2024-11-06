import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';

import ReviewCard from '../review-card';
import './index.scss';

const Review = () => {
  const [list, setList] = useState([
    { id: 1, name: 'web前端', content: '我在prototype上添加了全局方法，声明文件这里该怎么写啊' },
    { id: 2, name: 'react工程师', content: '是jsx吗，我的是shims.tsx.d.ts啊' },
    { id: 3, name: '哈哈哈', content: '评论内容' },
    { id: 4, name: '理论跟实践', content: '不错的文章！' },
  ]);
  const [reviewContent, setReviewContent] = useState('');
  const onChange = (e) => {
    setReviewContent(e.target.value);
  };

  // TODO: 未完成，掉用评论接口
  const send = () => {
    console.log(reviewContent);
  }

  return (
    <div className="bg-gray-white ptb-20 plr-20 br-4">
      <div className="modules-title fs-28 fw-600 mb-32">评论{list?.length}</div>
      <div>
        <Input.TextArea
          showCount
          maxLength={1000}
          onChange={onChange}
          placeholder="平等交流，友善表达"
          style={{
            height: 120,
            resize: 'none',
          }}
        />
        <Button type="primary" className="mt-20" onClick={send}>发送</Button>
      </div>
        {
          list?.map(item => {
            return <ReviewCard {...item} key={item.id} />
          })
        }
    </div>
  );
};
export default Review;
