import React, { useState, useEffect } from 'react';
import { articleListData } from '@/demo';
import { useNavigate } from 'react-router-dom';
import SvgIcon from '@/components/svg-icon';
import './index.scss';

const ArticleRank = () => {
  const navigate = useNavigate();
  const gotoCourseDetail = (id) => {
    navigate(`/user/article/${id}`);
  }
  return (
    <div className="article-rank-container">
      <div className="article-rank-header fw-600 fs-16 plr-8 ptb-8 flex-vcenter flex-between">
        <div className="flex-vcenter"><SvgIcon iconName="icon-wenzhang2" className="mr-8" />文章榜</div>
      </div>
      <div className="article-rank-content plr-8 pb-8">
        {
          articleListData?.slice(0, 5)?.map((item, index) => {
            return <div key={item.id} className="article-rank-item-title flex-vcenter ptb-8" onClick={() => gotoCourseDetail(item.id)}>
              <div className="article-rank-index fs-12">{index + 1}、</div>
              <div className="text-ellipsis flex-1">{item.title}</div>
            </div>
          })
        }
      </div>
    </div>
  );
};
export default ArticleRank;
