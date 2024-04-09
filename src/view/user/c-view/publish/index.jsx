import React, { memo, useEffect, useState } from 'react'
import { Card, Breadcrumb, Form, Button, Input, Space, Select, Radio, Upload, message } from 'antd'
import { Option } from 'antd/es/mentions'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { PublishWrapper } from './style'
import { fetchArticle, getArticleById, updateArticle, } from '@/service'
import { useChannel } from '@/hooks/useChannel'

const Publish = memo(() => {
  // 定义内部的状态
  const [imageType, setImageType] = useState(0)
  const [imageList, setImageList] = useState([])
  const {channelList} = useChannel()
  const [form] = Form.useForm()
  const [searchParams] = useSearchParams()
  const articleId = searchParams.get('id')
  const navigate = useNavigate()

    // 上传图片
    const onUploadChange = (value) => {
      setImageList(value.fileList)
    }
  
    // 切换图片模式
    const onTypeChange = (e) => {
      setImageType(e.target.value)
    }

  // 提交表单
  const onFinish = (formValue) => {
    if (imageList.length !== imageType) {
      return message.warning('封面类型和图片不匹配')
    }
    const { title, content, channel_id } = formValue
    const reqData = {
      title,
      content,
      cover: {
        type: imageType,
        images: imageList.map(item => {
          if (item.response) {
            return item.response.data.url
          } else {
            return item.url
          }
        })
      },
      channel_id
    }
    if (articleId) {
      // 编辑
      updateArticle({...reqData, id: articleId})
      navigate('/article')
    } else {
      // 新增
      fetchArticle(reqData)
    }
  }

  // 回填数据
  useEffect(() => {
    async function getArticleValue() {
      const res = await getArticleById(articleId)
      form.setFieldsValue({
        ...res.data,
        type: res.data.cover.type
      })
      setImageType(res.data.cover.type)
      setImageList(res.data.cover.images.map(url => {
        return {url}
      }))
    }
    if (articleId) {
      getArticleValue()
    }
  },[articleId, form])

  return (
    <PublishWrapper>
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: `${articleId ? '编辑' : '发布'}文章` },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {
                channelList.map((item) => {
                  return (
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type" onChange={onTypeChange}>
              <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && 
            <Upload
            maxCount={imageType}
            name="image"
            listType="picture-card"
            showUploadList
            action={'http://geek.itheima.net/v1_0/upload'}
            onChange={onUploadChange}
            fileList={imageList}
            >
              <div style={{ marginTop: 8 }}>
              <PlusOutlined />
              </div>
            </Upload>}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </PublishWrapper>
  )
})

export default Publish