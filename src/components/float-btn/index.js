import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const FloatBtn = createFromIconfontCN({
  scriptUrl: process.env.ICONFONT_URL, // 在 iconfont.cn 上生成
  extraCommonProps: {
    style: {
      fontSize: '30px',
      color: 'red',
      fill: 'currentColor'
    },
  },
});

export default FloatBtn;