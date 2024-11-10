import React, { useState, useEffect } from 'react';

import CourseCard from '@/components/course-card';
import ArticleCard from '@/components/article-card';
import ArticleRank from '@/components/article-rank';

const Main = ({ selectedTags, refresh = () => {}, list = [] }) => {
  // const CardComponent = selectedTags === 'video' ? CourseCard : ArticleCard;
  return (
    <div className="content-container width-1220">
      {
        selectedTags === 'video' ?
        <React.Fragment>
          {
            list?.map((item, index) => {
              return <CourseCard key={item.id} {...item} refresh={refresh} />
            })
          }
        </React.Fragment>
        :
        <div className="article-box flex">
          <div className="article-box-left">
            {
              list?.map((item, index) => {
                return <ArticleCard key={item.id} {...item} refresh={refresh} />
              })
            }
          </div>
          <div className="article-box-right">
            <ArticleRank />
          </div>
        </div>
      }

      {/* {
        articleListData?.map((item, index) => {
          return <CardComponent {...item} />
        })
      } */}
    </div>
  );
};
export default Main;
