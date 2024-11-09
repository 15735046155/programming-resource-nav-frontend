import React, { useState, useEffect } from 'react';
import { Tabs, Table, Space, Button, Tooltip, Flex, Input, DatePicker, message } from 'antd';

import { reviewer_status, reviewer_status_icon} from '@/constants';
import ReviewModal from '@/components/review-modal'; 
import SvgIcon from '@/components/svg-icon';

import './index.scss';
const demoData = [
  {
    id: '1',
    author: 'John Brown',
    title: 'My title',
    desc: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
    sub_time: '2024-11-04',
    reviewer_status: 0,
    reviewer_name: '张小明',
    reviewer_time: '2024-11-04',
  },
  {
    id: '2',
    author: '随云632',
    title: 'TypeScript 编译选项、声明文件 ｜ 青训营笔记 ',
    desc: '文章是作者在项目进行 ts 迁移过程中的思考与总结。介绍了 Vue ts 声明文件的作用、产生的问题及解惑，包括文件的理解与改造、全局声明的写法及不同原因。还列举了项目迁移中的其他 ts 问题，如动态引入、插件声明、引用路径等，并对 namespace 和 module 进行了说明。最后提供了参考文档。',
    sub_time: '2024-11-05',
    reviewer_status: 1,
    reviewer_name: '随云632',
    reviewer_time: '2024-11-05',
  },
  {
    id: '3',
    author: '全栈',
    title: 'TypeScript',
    desc: '这篇文章是关于 TypeScript 的笔记，介绍了其特性、编译选项、声明文件等内容。包括 TypeScript 作为 JavaScript 超集的特点和目标，众多编译选项及其作用，如compilerOptions里的各项设置。还阐述了声明文件的生成和使用，如declaration选项，以及如何处理第三方库的类型定义，如@types、typeRoots等配置，同时提到了相关实验和发布声明文件的方式等。',
    sub_time: '2024-11-04',
    reviewer_status: 2,
    reviewer_name: '全栈',
    reviewer_time: '2024-11-04',
  },
];
const WorkList = () => {
  const items = [
    {
      key: 'noAudited',
      label: '待审核',
    },
    {
      key: 'audited',
      label: '审核成功',
    },
    {
      key: 'failed',
      label: '审核失败',
    },
  ];
  const [activeKey, setActiveKey] = useState('noAudited'); // 审核/为审核tab
  const [data, setData] = useState(demoData || []); // 数据
  const [loading, setLoading] = useState(false); // 加载状态
  const [total, setTotal] = useState(0); // 总数
  const [params, setParams] = useState({
    page: 1,
    pageSize: 10,
  });
  const [nowSourceId, setNowSourceId] = useState(''); // 当前审核id
  // 以下弹窗参数
  const [visible, setVisible] = useState(false); // 弹窗状态
  const [title, setTitle] = useState(''); // 弹窗title
  const [placeholder, setPlaceholder] = useState(''); // 弹窗placeholder
  // 以上弹窗参数
  const onOk = () => {
    message.success('操作成功');
    setVisible(false);
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 70,
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}><div className="pointer fc-brand">{text}</div></Tooltip>
      ),
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '摘要',
      dataIndex: 'desc',
      key: 'address',
      ellipsis: true,
    },
    {
      title: '提交时间',
      dataIndex: 'sub_time',
      key: 'sub_time',
    },
    {
      title: '审核状态',
      key: 'reviewer_status',
      dataIndex: 'reviewer_status',
      ellipsis: {
        showTitle: false,
      },
      render: (text, record) => (
        <div className="flex-vcenter">
          <SvgIcon iconName={reviewer_status_icon[text]} />
          <span className="ml-4">{reviewer_status[text]}</span>
          {text === 2 && 
            <Tooltip placement="topLeft" title={'yuyuyu'}>
              <SvgIcon iconName="icon-bangzhu1"></SvgIcon>
            </Tooltip>
          }
        </div>
      ),
    },
    {
      title: '审核人',
      key: 'reviewer_name',
      dataIndex: 'reviewer_name',
    },
    {
      title: '审核时间',
      key: 'reviewer_time',
      dataIndex: 'reviewer_time',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <div className="flex fc-brand pointer">
          <div onClick={() => {
            setNowSourceId(record.id);
            setTitle('审核通过');
            setPlaceholder('请输入审核通过描述');
            setVisible(true);
          }}>通过</div>
          <div className="ml-8" onClick={() => {
            setNowSourceId(record.id);
            setTitle('审核拒绝');
            setPlaceholder('请输入审核拒绝原因');
            setVisible(true);
          }}> 拒绝 </div>
        </div>
      ),
    },
  ];

  const onChange = (page, pageSize) => {
    console.log(page, pageSize);
  }
  return (
    <div className="examine-list-page ptb-20 plr-20 mtb-20 mlr-20 br-8">
      <Tabs activeKey={activeKey} items={items} onChange={(v) => setActiveKey(v)} />
      <Flex className="mb-10">
        <div className="flex flex-vcenter mr-10 fc-gray-666">
          审批时间：<DatePicker.RangePicker />
        </div>
        <Input placeholder="请输入关键词搜索" style={{ width: 200, marginRight: 10 }} />
        <Button type="primary">查找</Button>
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={{
          pageSize: 20,
          showSizeChanger: true,
          pageSizeOptions: [20, 50, 100, 200],
          onChange: onChange,
          defaultCurrent: 1,
          total: 1,
        }}
      />
      <ReviewModal title={title} visible={visible} placeholder={placeholder} onOk={onOk} onCancel={() => setVisible(false)} />
    </div>
  );
};
export default WorkList;
