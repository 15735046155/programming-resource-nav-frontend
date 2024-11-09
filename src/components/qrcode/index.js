import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { message } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Qrcode = ({ url, ...props}) => {
  return (
    <div className="ptb-8 plr-8">
      <QRCodeCanvas
        size={140}
        value={url}
        level="M"
        {...props}
      />
      <CopyToClipboard text={url} onCopy={() => message.success('复制成功')}>
        <div className="fc-brand fs-12 mt-8 flex-center pointer">复制链接</div>
      </CopyToClipboard>
    </div>
  );
}

export default Qrcode;
