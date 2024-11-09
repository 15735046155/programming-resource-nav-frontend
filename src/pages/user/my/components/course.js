import { useState, useEffect } from 'react';
import { Tag } from 'antd';

import { sourceTypeTagData } from '@/constants';
import CourseCard from '@/components/course-card';
import ArticleCard from '@/components/article-card';
import { articleListData } from '@/demo';

const MyCourse = () => {
  const [selectedTags, setSelectedTags] = useState('video');
  const CardComponent = selectedTags === 'video' ? CourseCard : ArticleCard;
  useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <div>
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
      <div className="flex flex-wrap pt-20">
        {
          articleListData?.map((item, index) => {
            return <CardComponent {...item} />
          })
        }
      </div>
    </div>
  );
}

export default MyCourse;