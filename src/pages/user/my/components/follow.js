import { useState, useEffect } from 'react';
import { followData } from '@/demo';
import FollowCard from '@/components/follow-card';
// import './index.scss';

const MyFollow = ({ cb = () => { } }) => {
  const handleFollow = ({ id, type }) => {
    // TODO: 掉用（取消）关注接口
    console.log('follow');
    cb?.();
  }

  return (
    <div>
      {
        followData?.map(item => {
          return <FollowCard {...item} key={item.id} cb={handleFollow} />
        })
      }
    </div>
  );
}

export default MyFollow;