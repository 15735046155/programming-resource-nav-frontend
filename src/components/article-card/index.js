import React from 'react';
import { Tag, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.scss'

const ArticleCard = (data = {}) => {
  const { courseImg, title, author = {}, praise, people, content, tag, id} = data;
  const { name } = author;
  const navigate = useNavigate();
  const items = [
    {
      key: '1',
      label: (
        <span onClick={() => console.log('操作:举报')}>
          举报
        </span>
      )
    },
    {
      key: '2',
      label: (
        <span onClick={() => console.log('操作:不感兴趣')}>
          不感兴趣
        </span>
      )
    },
    {
      key: '2',
      label: (
        <span onClick={() => console.log('操作:屏蔽标签')}>
          屏蔽标签
        </span>
      )
    },
  ];
  // 对文章进行举报等
  const reportArticle = (e, key) => {
    e.stopPropagation();
    // TODO: 举报操作，掉接口
    switch (key) {
      case '1':
        console.log('举报操作');
        break;
      case '2':
        console.log('不感兴趣');
        break;
      case '3':
        console.log('屏蔽标签');
        break;
      default:
        break;
    }
  }
  // 跳转详情页
  const gotoCourseDetail = () => {
    console.log('id', id);
    // navigate(`/article/${id}`);
  }
  // 点赞
  const giveLike = (e) => {
    e.stopPropagation();
    // TODO: 点赞操作，掉接口
    console.log('点赞操作');
  }

  return (
    <div className="article-card-components" onClick={gotoCourseDetail}>
      <div className="article-card-content-wrapper flex">
        <div className="article-card-container flex-1 flex-column">
          <div className="article-card-title text-ellipsis fs-16 fw-600">{title}</div>
          <div className="article-card-desc text-ellipsis fs-13">{content}</div>
          <div className="article-card-info flex flex-between">
            <div className="flex-vcenter">
              <span className="article-card-teacher-name fs-13">{name}</span>
              <div className="divider"></div>
              <span className="article-card-num fs-13 mr-24 flex-vcenter"><i className="iconfont icon-check-line mr-4"></i>{people}</span>
              <span className="article-card-num fs-13 mr-24 fflex-vcenter"><i className="iconfont icon-dianzan2 mr-4" onClick={giveLike}></i>{praise}</span>
              <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <span className="article-card-num fs-13 flex-vcenter"><i className="iconfont icon-gengduo2 mr-4"></i></span>
              </Dropdown>
            </div>
            <div className="tag-box">
              {tag?.map(item => <Tag key={item} style={{ maxWidth: 100 }} className="text-ellipsis">{item}</Tag>)}
            </div>
          </div>
        </div>
        <img src={courseImg} alt="" className="article-card-img" />
      </div>
    </div>
  );
};
export default ArticleCard;
