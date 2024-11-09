import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tag, FloatButton, Tooltip } from 'antd';
import { PlusOutlined, WarningOutlined, ShareAltOutlined, StarOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './index.scss';
import ArticleRank from '@/components/article-rank';
import FloatBtn from '@/components/float-btn';
import SvgIcon from '@/components/svg-icon';
import Review from '@/components/review';
import Qrcode from '@/components/qrcode';
import ReportModal from '@/components/report-modal';

const ArticleDetail = () => {
  const { id } = useParams();
  const [reportModalVisible, setReportModalVisible] = useState(false);

  // 关闭举报弹窗
  const onOk = () => {
    setReportModalVisible(false);
  };
  return (
    <div className="article-detail-page flex">
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <Tooltip title="关注作者" placement="left">
          <FloatButton icon={<PlusOutlined />} />
        </Tooltip>
        <Tooltip title="点赞文章" placement="left">
          <FloatButton icon={<SvgIcon iconName="icon-dianzan1" style={{ width: '20px', height: '20px', color: '#000'}}></SvgIcon>} />
        </Tooltip>
        <Tooltip title="收藏文章" placement="left">
          <FloatButton icon={<StarOutlined />} onClick={() => {console.log('收藏')}} />
        </Tooltip>
        <Tooltip title="举报文章" placement="left">
          <FloatButton icon={<WarningOutlined />} onClick={() => setReportModalVisible(true)}  />
        </Tooltip>
        <Tooltip title={<Qrcode url={window.location.href} />} placement="left" color="#fff">
          <FloatButton icon={<ShareAltOutlined />} />
        </Tooltip>
      </FloatButton.Group>
      <div className="article-detail-page-middle flex-1">
        <div className="bg-gray-white mb-20 ptb-20 br-4">
          <div className="article-title fs-26 fw-600 fc-gray-333 mb-16">文章标题</div>
          <div className="author-info-block flex fs-12 fw-600 fc-gray-333 mb-16">
            <div className="author-name mr-24 fs-14">绝版坏小子</div>
            <div className="author-time mr-24 fs-14">2024-11-04</div>
            <div className="author-time fs-14 mr-24 flex-vcenter"><SvgIcon iconName="icon-check-line" className="mr-4"></SvgIcon>16</div>
          </div>
          {/* TODO：内容展示 */}
          {/* <div dangerouslySetInnerHTML={{ __html: '<h1>哈哈哈h1</h1>' }}></div> */}
          <div className="article-tags flex">标签：<Tag>Tag 1</Tag></div>
        </div>
        <Review />
      </div>
      <div className="article-detail-page-right br-4">
        <ArticleRank />
      </div>
      <ReportModal
        visible={reportModalVisible}
        onCancel={onOk}
        onOk={onOk}
        id={id}
      />
    </div>
  );
};
export default ArticleDetail;
