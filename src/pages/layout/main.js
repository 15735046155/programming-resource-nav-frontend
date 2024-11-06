import React, { useState, useEffect } from 'react';
import { articleListData } from '@/demo';

import CourseCard from '@/components/course-card';
import ArticleCard from '@/components/article-card';
import ArticleRank from '@/components/article-rank';

const Main = ({ type }) => {
  const CardComponent = type === 'video' ? CourseCard : ArticleCard;
  return (
    <div className="content-container width-1220">
      {
        type === 'video' ?
        <React.Fragment>
          {
            articleListData?.map((item, index) => {
              return <CourseCard {...item} key={item.id} />
            })
          }
        </React.Fragment>
        :
        <div className="article-box flex">
          <div className="flex-1">
            {
              articleListData?.map((item, index) => {
                return <ArticleCard {...item} key={item.id} />
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
