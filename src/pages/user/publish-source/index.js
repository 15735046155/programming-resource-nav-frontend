import { useState, useEffect } from 'react';
import MyEditor from '@/components/rich-text';
import { PlusOutlined } from '@ant-design/icons';
import SvgIcon from '@/components/svg-icon';
import { Button, Form, Input, Radio, Select, Upload } from 'antd';
import './index.scss';

const PublicSource = () => {
  const [publishStatus, setPublishStatus] = useState('1'); // 0:未发布 1:发布成功 2:发布失败
  const [form] = Form.useForm();
  useEffect(() => {
    console.log('useEffect');
  }, []);

  // const content = `
  //   <h1>标题</h1>
  //   <p>内容</p>
  // `
  // 内容改变回调
  const onContentChange = (content) => {
    console.log(content);
  }
  const onFormVariantChange = (value) => {
    console.log(value);
  }
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  // 提交表单
  const onFinish = (values) => {
    console.log(values);
  }
  return (
    <div className="public-source-page">
      {
        publishStatus === '0' ?
        <Form
          form={form}
          scrollToFirstError
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{}}
          onValuesChange={onFormVariantChange}
          onFinish={onFinish}
        >
          <Form.Item label="资源类型" name="type"
            rules={[{ required: true, message: '请选择发布的资源类型！' }]}>
            <Radio.Group>
              <Radio value="course">课程</Radio>
              <Radio value="article">文章</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="标题" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="链接" name='link'>
            <Input />
          </Form.Item>
          <Form.Item label="简介" name='desc'>
            <MyEditor content="" cb={onContentChange} />
          </Form.Item>
          <Form.Item label="目录" name='catalog'>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="封面图" valuePropName="fileList" getValueFromEvent={normFile} name='cover'>
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: 'none',
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>
              取消
            </Button>
          </Form.Item>
        </Form>
        :
        <div className="public-source__success">
          <SvgIcon iconName={publishStatus === '1' ? 'icon-Ok' : 'icon-fabushibai'} style={{ marginRight: '10px' }}></SvgIcon>
          <div className="status">
            发布{publishStatus === '1' ? '成功' : '失败'}
          </div>
          <div className="passion">
            因为有你的支持，我们的社区才能越来越好！
          </div>
          <Button type="primary" onClick={() => setPublishStatus('0')}>继续发布</Button>
        </div>
      }
    </div>
  );
}

export default PublicSource;