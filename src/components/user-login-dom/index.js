import { useState, useEffect } from 'react';
// import './index.scss';
import { Dropdown } from 'antd';
import LoginModal from '../login-modal';
import SvgIcon from '../svg-icon';
import MyCenter from './my-center';

const UserLoginDom = () => {
  // TODO: 登录信息获取
  const [userInfo, setUserInfo] = useState({ id: 1, name: ''});
  const [loginModalVisible, setLoginModalVisible] = useState(false); // 登录弹窗

  const handleCloseModal = () => {
    setLoginModalVisible(false);
  }
  const handleOk = (data) => {
    setLoginModalVisible(false);
  }

  const items = [
    {
      key: 'preson-center',
      label: <MyCenter />,
    },
  ]
  return (
    <div>
      {
        userInfo?.name
        ? <Dropdown menu={{ items }} placement="bottom">
            <img className="login-head-img" src="https://servu-acc.oss-cn-hangzhou.aliyuncs.com/avatar/default/ea31316f6d3744759d01221dc00cc485.png" alt="" />
          </Dropdown>
        
        : <div className='head-login' onClick={() => setLoginModalVisible(true)}>
            登录
          </div>
      }
      <LoginModal
        visible={loginModalVisible}
        setLoginModalVisible={(v) => setLoginModalVisible(v)}
        onCancel={handleCloseModal}
        onOk={handleOk}
      />
    </div>
  );
}

export default UserLoginDom;