import React, { useState, useEffect } from 'react';
import { articleListData } from '@/demo';

import CourseCard from '@/components/course-card';
import ArticleCard from '../../components/article-card';

const Main = ({ type }) => {
  const CardComponent = type === 'video' ? CourseCard : ArticleCard;
  return (
    <div className="content-container width-1220 br-8">
      {
        articleListData?.map((item, index) => {
          return <CardComponent {...item} />
        })
      }
    </div>
  );
};
export default Main;
