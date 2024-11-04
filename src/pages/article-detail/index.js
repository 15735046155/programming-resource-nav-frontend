import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();

  return (
    <div>我是文章详情页  id:{id}</div>
  );
};
export default ArticleDetail;
