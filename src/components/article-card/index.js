import React, { useState } from 'react';
import { Tag, Dropdown, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import SvgIcon from '@/components/svg-icon';
import ReportModal from '@/components/report-modal';

const ArticleCard = (data = {}) => {
  const { courseImg, title, author = {}, praise, people, collect, content, tag, id, refresh, praiseStatus, collectStatus } = data;
  const { name } = author;
  const navigate = useNavigate();
  const [reportModalVisible, setReportModalVisible] = useState(false);

  // 举报
  const showModal = () => {
    setReportModalVisible(true);
  };

  const onCancel = () => {
    setReportModalVisible(false);
  };
  const onOk = () => {
    setReportModalVisible(false);
    refresh();
  };
  // 跳转详情页
  const gotoCourseDetail = () => {
    navigate(`/user/article/${id}`);
  }
  // 点赞
  const giveLike = () => {
    // TODO: 点赞操作，掉接口
    console.log('点赞操作');
    refresh();
  }
  // 点赞
  const collectArticle = () => {
    // TODO: 收藏操作，掉接口
    console.log('点赞操作');
    refresh();
  }
  // 不感兴趣
  const notInterested = () => {
    // TODO: 不感兴趣操作，掉接口
    refresh();
  }
  // 屏蔽标签
  const shield = () => {
    Modal.confirm({ 
      title: '确定屏蔽该标签吗？',
      content: '屏蔽该标签后，将不再推荐该标签下的内容',
      onOk: () => {
        // TODO: 屏蔽操作，掉接口
        refresh();
      },
      onCancel: () => console.log('false'),
    })
  }
  const items = [
    {
      key: '1',
      label: <span onClick={showModal}>举报</span>,
    },
    {
      key: '2',
      label: <span onClick={notInterested}>不感兴趣</span>,
    },
    {
      key: '3',
      label: <span onClick={shield}>屏蔽标签</span>,
    },
  ];

  return (
    <div className="article-card-components">
      <div className="article-card-content-wrapper flex">
        <div className="article-card-container flex-1 flex-column">
          <div className="article-card-title text-ellipsis fs-16 fw-600" onClick={gotoCourseDetail}>{title}</div>
          <div className="article-card-desc text-ellipsis fs-13" onClick={gotoCourseDetail}>{content}</div>
          <div className="article-card-info flex flex-between">
            <div className="flex-vcenter">
              <span className="article-card-teacher-name fs-13">{name}</span>
              <div className="divider"></div>

              <span className="article-card-num fs-13 mr-24 flex-vcenter"><SvgIcon iconName="icon-check-line" className="mr-4"></SvgIcon>{people}</span>
              <span className="fs-13 mr-24 flex-vcenter">
                <SvgIcon iconName="icon-dianzan1" className="mr-4" style={{ color: praiseStatus ? '#0060dd': ''}} onClick={giveLike}></SvgIcon>
                <span className="article-card-num" style={{ color: praiseStatus ? '#0060dd': ''}}>{praise}</span>
              </span>
              <span className="fs-13 mr-24 flex-vcenter">
                <SvgIcon iconName="icon-shoucang5" className="mr-4" style={{ color: collectStatus ? '#0060dd' : '' }}onClick={collectArticle}></SvgIcon>
                <span className="article-card-num" style={{ color: praiseStatus ? '#0060dd': ''}}>{collect}</span>
              </span>
              
              <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <span className="article-card-num fs-13 flex-vcenter"><SvgIcon iconName="icon-gengduo2" className="mr-4 icon"></SvgIcon></span>
              </Dropdown>
            </div>
            <div className="tag-box" onClick={gotoCourseDetail}>
              {tag?.map(item => <Tag key={item} style={{ maxWidth: 100 }} className="text-ellipsis">{item}</Tag>)}
            </div>
          </div>
        </div>
        <img src={courseImg} alt="" className="article-card-img" onClick={gotoCourseDetail} />
      </div>
      <ReportModal
        visible={reportModalVisible}
        onCancel={onCancel}
        onOk={onOk}
        id={id}
      />
    </div>
  );
};
export default ArticleCard;
