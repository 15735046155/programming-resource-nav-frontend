import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { getUrlQuery } from '@/utils/getUrlQuery';
import { MyCourse, MyFollow, MyBeFollow } from './components';
import './index.scss';

const My = () => {
  const [tabKey, setTabKey] = useState(getUrlQuery().tabs || 'source');
  const onChange = (key) => {
    setTabKey(key);
  };
  // TODO：关注列表
  const getFollowList = () => {
    
  }
  // TODO：粉丝列表
  const getBeFollowList = () => {
    
  }
  const items = [
    {
      key: 'course',
      label: '作品',
      children: <MyCourse />,
    },
    {
      key: 'collect',
      label: '收藏',
      children: <MyCourse />,
    },
    {
      key: 'follow',
      label: '关注',
      children: <MyFollow cb={getFollowList}  />,
    },
    {
      key: 'like',
      label: '点赞',
      children: <MyCourse />,
    },
    {
      key: 'beFollow',
      label: '关注者',
      children: <MyFollow cb={getBeFollowList} />,
    },
  ];
  const getList = () => {
    // 获取列表
    switch (tabKey) {
      // 获取作品列表
      case 'source':
        return '作品'
      case 'collect':
        return '收藏'
      case 'follow':
        return '关注'
      case 'like':
        return '点赞'
      case 'beFollow':
        return '关注者'
      default:
        return '默认';
    }
  }
  useEffect(() => {
    getList(tabKey);
  }, [tabKey]);

  return (
    <div className="my-page flex">
      <div className="my-page-left flex-1">
        <Tabs
          defaultActiveKey={tabKey}
          items={items}
          onChange={onChange}
          indicator={{ size: (origin) => origin - 20, align: 'center' }}
        />
      </div>
      <div className="my-page-right">
        {/* 个人信息模块：昵称、头像引导填写标签，岗位 */}
        <div className="user-info flex-center br-4">
          <img className="avatar" src="https://s.17win.com/snack/115/1615359264000/user.png" alt="" />
          <div className="name">绝版坏小子</div>
          <div className="collect-info mb-4 mt-20">你从事什么行业</div>
          <div className="collect-info">你的兴趣爱好是什么</div>
        </div>
        <div className="personal-achievement br-4">
          <div className="item flex-between flex-vcenter"><span>作品被阅读</span><span className="fc-brand">23</span></div>
          <div className="item flex-between flex-vcenter"><span>关注了</span><span className="fc-brand">23</span></div>
          <div className="item flex-between flex-vcenter"><span>关注者</span><span className="fc-brand">23</span></div>
          <div className="item flex-between flex-vcenter"><span>作品集</span><span className="fc-brand">23</span></div>
          <div className="item flex-between flex-vcenter"><span>收藏集</span><span className="fc-brand">23</span></div>
          <div className="item flex-between flex-vcenter"><span>加入于</span><span className="fc-brand">2024-08-08</span></div>
        </div>
      </div>
    </div>
  );
};
export default My;
