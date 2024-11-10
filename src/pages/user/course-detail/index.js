import { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import SvgIcon from '@/components/svg-icon';
import Qrcode from '@/components/qrcode';
import { courseCategory } from '@/demo.js'
import ReviewCard from '@/components/review-card';
import VideoPlayer from '@/components/video-player';
import LiveGif from '@/components/live-gif';
import './index.scss';

const CourseDetail = () => {
  const [videoUrl, setVideoUrl] = useState(''); // 播放地址
  const [activeIndex, setActiveIndex] = useState(0); // 当前播放章节索引

  const categoryClick = ({ index, url }) => {
    setActiveIndex(index);
    setVideoUrl(url);
  }
  // TODO：点赞
  const giveLike = () => {
    
  }
  // TODO：收藏
  const collect = () => {
    
  }

  useEffect(() => {
    categoryClick(courseCategory[0]);
  }, []);

  return (
    <div className="course-detail flex">
      <div className="course-detail-left br-4 plr-20">
        <div className="course-detail-title fs-20 fw-600 pt-15 fc-gray-333">课程titles</div>
        <div className="course-detail-video-box">
          <VideoPlayer url={videoUrl} />
        </div>
        {/* 课程进度，收藏分享 */}
        <div className="course-progress ptb-16 flex-vcenter flex-between fc-gray-333 fs-14">
          <div>
            <span>更新中</span>
            <span className="ml-36">2000个人在学</span>
          </div>
          <div className="flex-vcenter pointer">
            <div className="flex-vcenter mr-20">
              <SvgIcon iconName="icon-dianzan1" className="mr-4" onClick={giveLike}></SvgIcon>
              <span>点赞</span>
            </div>
            <div className="flex-vcenter mr-20">
              <SvgIcon iconName="icon-shoucang5" className="mr-4" onClick={collect}></SvgIcon>
              <span>收藏</span>
            </div>
            <Tooltip title={<Qrcode url={window.location.href} />} placement="top" color="#fff">
              <div className="flex-vcenter">
                <SvgIcon iconName="icon-fenxiang1" className="mr-4">分享</SvgIcon>
                <span>分享</span>
              </div>
            </Tooltip>
          </div>
        </div>
        {/* 讲师信息 */}
        <div className="teacher-info flex ptb-20 fc-gray-333 fs-14">
          <img className="teacher-avatar" src="https://servu-acc.oss-cn-hangzhou.aliyuncs.com/avatar/default/ea31316f6d3744759d01221dc00cc485.png" alt="" />
          <div className="ml-16">
            <div className="fc-gray-333 fs-16">老师名称</div>
            <div className="mt-10 fc-gray-666 fs-14">老师描述</div>
          </div>
        </div>
        {/* 课程简介 */}
        <div className="course-intro fs-14 ptb-20">
          课程简介-富文本
          你，永远可以相信禹神！<br/>
          最适合初学者，全网最强前端html+css课程，细节拉满！
          企业级实战开发，带你入门，更带你入行！
        </div>
        {/* 评论 */}
        <div className="course-comment">
          <div className="title fs-16 fw-500 pt-16 fc-gray-333">评论</div>
          {
            [
              { id: 1, name: 'web前端', content: '我在prototype上添加了全局方法，声明文件这里该怎么写啊' },
              { id: 2, name: 'react工程师', content: '是jsx吗，我的是shims.tsx.d.ts啊' },
              { id: 3, name: '哈哈哈', content: '评论内容' },
              { id: 4, name: '理论跟实践', content: '不错的文章！' },
            ].map(item => {
              return <ReviewCard key={item.id} {...item} />
            })
          }
        </div>
      </div>
      <div className="course-detail-right br-4">
        <div className="course-category br-4">
          <div className="title fs-16 fw-500 plr-20 ptb-16 fc-gray-333">视频选集</div>
          {
            courseCategory.map((item, index) => {
              return (
                <div className="course-category-item fs-14 flex-between" style={{ color: videoUrl === item.url ? '#0060dd' : ''}} key={item.id} onClick={() => setVideoUrl(item.url)}>
                  <span>{index + 1}_{item.name}</span>{videoUrl === item.url ? <LiveGif /> : ''}
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;