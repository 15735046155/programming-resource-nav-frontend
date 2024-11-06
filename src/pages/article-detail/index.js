import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tag, FloatButton } from 'antd';
import { PlusOutlined, WarningOutlined, ShareAltOutlined, StarOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './index.scss';
import ArticleRank from '@/components/article-rank';
import FloatBtn from '@/components/float-btn';
import SvgIcon from '@/components/svg-icon';
import Review from '@/components/review';

const ArticleDetail = () => {
  const { id } = useParams();

  return (
    <div className="article-detail-page flex">
      <div className="article-detail-page-left">
        {/* <FloatButton icon={<FloatBtn type="icon-wenzhang2" />} /> */}
        <FloatButton icon={<PlusOutlined />} />
        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
          <FloatButton icon={<QuestionCircleOutlined />} />
          <FloatButton icon={<StarOutlined />} />
          <FloatButton icon={<WarningOutlined />} />
          <FloatButton icon={<ShareAltOutlined />} />
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
      </div>
      <div className="article-detail-page-middle flex-1">
        <div className="bg-gray-white mb-20 plr-20 ptb-20 br-4">
          <div className="article-title fs-26 fw-600 fc-gray-333 mb-16">文章标题</div>
          <div className="author-info-block flex fs-12 fw-600 fc-gray-333 mb-16">
            <div className="author-name mr-24 fs-14">绝版坏小子</div>
            <div className="author-time mr-24 fs-14">2024-11-04</div>
            <div className="author-time fs-14 mr-24 flex-vcenter"><SvgIcon iconName="icon-check-line" className="mr-4"></SvgIcon>16</div>
          </div>
          {/* TODO：内容展示 */}
          {/* <div dangerouslySetInnerHTML={{ __html: '<h1>哈哈哈h1</h1>' }}></div> */}
          <div className="article-tags flex">标签：<Tag>Tag 1</Tag></div>
        </div>
        <Review />
      </div>
      <div className="article-detail-page-right br-4">
        <ArticleRank />
      </div>
    </div>
  );
};
export default ArticleDetail;
