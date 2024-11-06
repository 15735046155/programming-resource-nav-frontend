// 当前组件是课程（视频卡片）
import React, { useState, useEffect } from 'react';

import './index.scss';

const CourseCard = ({ courseImg, title, author = {}, praise, people } = {}) => {
  // const { courseImg, title, teacher = {}, praise, people } = data;
  const { avatar = 'https://s.17win.com/snack/115/1615359264000/user.png', name, desc } = author;
  const gotoCourseDetail = () => {
    console.log('跳转到详情页');
  }
  return (
    <div className="course-card-components" onClick={gotoCourseDetail}>
      <img src={courseImg} alt="" className="course-card-img" />
      <div className="course-card-container ptb-8 plr-12 flex-1 flex-column">
        <div className="course-card-title text-ellipsis-2">{title}</div>
        <div className="course-card-teacher fs-14 mt-10">
          <img src={avatar} alt="" className="course-card-teacher-avatar" />
          <div className="course-card-teacher-name text-ellipsis flex-1">{name}</div>
          <div className="course-card-teacher-desc text-ellipsis flex-1">{desc}</div>
        </div>
        <div className="course-card-info fs-12 mt-8">
          <span className="course-card-info-praise">{praise}点赞</span>
          <span className="course-card-info-people">{people}人已学习</span>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
