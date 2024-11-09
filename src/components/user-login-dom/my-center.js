import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import SvgIcon from '../svg-icon';

const MyCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="popover-content">
      <div className="my-center flex">
        <div className="user-info-item" onClick={() => navigate(`/user/my?tab=follow`)}>
          <div className="collect-num">12</div>
          <div className="collect-text">关注</div>
        </div>
        <div className="user-info-item" onClick={() => navigate(`/user/my?tab=like`)}>
          <div className="collect-num">12</div>
          <div className="collect-text">赞过</div>
        </div>
        <div className="user-info-item" onClick={() => navigate(`/user/my?tab=collect`)}>
          <div className="collect-num">12</div>
          <div className="collect-text">收藏</div>
        </div>
      </div>
      <div className="handle-box">
        <div className="handle-item flex-vcenter" onClick={() => navigate('/user/my')}>
          <SvgIcon iconName="icon-wode" />
          <span className="handle-text">我的主页</span>
        </div>
        {/* TODO: 退登 */}
        <div className="handle-item flex-vcenter" onClick={() => console.log('退出登录')}>
          <SvgIcon iconName="icon-tuichu" />
          <span className="handle-text">退出登录</span>
        </div>
      </div>
    </div>
  );
}

export default MyCenter;