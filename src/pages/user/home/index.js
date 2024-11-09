import React from 'react';
import { articleListData } from '@/demo';

import Head from './head';
import Main from './main';
import './index.scss';
const Home = () => {
  const [select, setSelect] = React.useState({ selectedTags: 'video', keyWord: '' });
  const getList = (values = select) => {
    // TODO:获取列表,掉接口
    console.log(values, '首页-列表接口');
  }
  return (
    <div className='layout'>
      <Head cb={(val) => setSelect(val)} select={select}></Head>
      {/* TODO: 记得更换数据 */}
      <Main selectedTags={select.selectedTags} refresh={getList} list={articleListData}></Main>
    </div>
  );
};
export default Home;
