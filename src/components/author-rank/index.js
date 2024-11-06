// 作者榜未实现
import React, { useState, useEffect } from 'react';
import { articleListData } from '@/demo';
import SvgIcon from '@/components/svg-icon';
import './index.scss';

const ArticleRank = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    
  }, []);

  return (
    <div className="article-rank-container br-8">
      <div className="article-rank-header fw-600 fs-16 plr-8 ptb-8 flex-vcenter flex-between">
        <div>作者榜</div>
        <div className="article-rank-header-more fs-12 flex-vcenter">更多<SvgIcon iconName="icon-gengduo2" /></div>
      </div>
      <div className="article-rank-content">
        {
          articleListData?.slice(0, 5)?.map((item, index) => {
            return <div key={item.id} className="article-rank-item-title fs-14 ptb-8 plr-8 text-ellipsis">{index + 1}、标题、标题、标题、标题、标题、标题、标题、标题、标题</div>
          })
        }
      </div>
    </div>
  );
};
export default ArticleRank;
