import React, { useState, useEffect } from 'react';
import { Dropdown } from 'antd';
import SvgIcon from '@/components/svg-icon';

import './index.scss';

const ReviewCard = (data = {}) => {
  const { id, name = '', content = '', time = '2024-11-06', img = 'https://s.17win.com/snack/115/1615359264000/user.png' } = data;
  const items = [
    {
      key: '1',
      label: (
        <span onClick={(e) => reportArticle(e, 1)}>
          举报
        </span>
      )
    },
    {
      key: '2',
      label: (
        <span onClick={(e) => reportArticle(e, 2)}>
          屏蔽作者
        </span>
      )
    },
  ];
  // 对文章进行举报等
  const reportArticle = (e, key) => {
    e.stopPropagation();
    // TODO: 举报操作，掉接口
    switch (key) {
      case '1':
        console.log('举报操作');
        break;
      case '2':
        console.log('屏蔽作者');
        break;
      default:
        break;
    }
  }

  return (
    <div className="review-card flex ptb-16">
      <img src={img} alt="review" className="head-img" />
      <div className="flex-1 flex-column">
        <div className="flex flex-between align-center">
          <span>
            <span className="name fs-16">{name}</span>
            <span className="ml-12 fs-14 time">{time}</span>
          </span>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <div><SvgIcon iconName="icon-gengduo2" className="mr-4 icon pointer" /></div>
          </Dropdown>
        </div>
        <div className="mt-4 review-content">{content}</div>
      </div>
    </div>
  );
};
export default ReviewCard;
