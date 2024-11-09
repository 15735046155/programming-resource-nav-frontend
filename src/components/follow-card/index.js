import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './index.scss';

const FollowCard = (data) => {
  const { avatar = 'https://servu-acc.oss-cn-hangzhou.aliyuncs.com/avatar/default/ea31316f6d3744759d01221dc00cc485.png', name, isFollowed, id, cb } = data;
  return (
    <div className="follow-card">
      <div className="follow-card-left flex-vcenter">
        <img className="follow-card-left-img mr-8" src={avatar} alt="关注者头像" />
        <div className="follow-card-left-name">{name}</div>
      </div>
      {/* isFollowed: 已关注 */}
      <Button type={isFollowed ? 'primary' : 'default'} onClick={() => cb(id, !isFollowed)}>{isFollowed ? '已关注' : '关注'}</Button>
    </div>
  );
}

export default FollowCard;