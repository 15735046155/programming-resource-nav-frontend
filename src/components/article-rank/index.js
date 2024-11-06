import React, { useState, useEffect } from 'react';
import { articleListData } from '@/demo';
import SvgIcon from '@/components/svg-icon';
import './index.scss';

const ArticleRank = () => {
  return (
    <div className="article-rank-container">
      <div className="article-rank-header fw-600 fs-16 plr-8 ptb-8 flex-vcenter flex-between">
        <div className="flex-vcenter"><SvgIcon iconName="icon-wenzhang2" className="mr-8" />文章榜</div>
      </div>
      <div className="article-rank-content plr-8 pb-8">
        {
          articleListData?.slice(0, 5)?.map((item, index) => {
            return <div key={item.id} className="article-rank-item-title flex-vcenter ptb-8">
              <div className="article-rank-index mr-8 fs-12">{index + 1}、</div>
              <div className="text-ellipsis">标题标题、标题、标题、标题、标题、标题、标题、标题</div>
            </div>
          })
        }
      </div>
    </div>
  );
};
export default ArticleRank;
