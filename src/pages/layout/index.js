import React from 'react';

import Head from './head';
import Main from './main';
import './index.scss';
const Layout = () => {
  const [type, setType] = React.useState('video');
  const getList = (values) => {
    // TODO:获取列表,掉接口
    console.log(values);
    setType(values.selectedTags)
  }
  return (
    <div className='layout'>
      <Head cb={(val) => getList(val)}></Head>
      <Main type={type}></Main>
    </div>
  );
};
export default Layout;
