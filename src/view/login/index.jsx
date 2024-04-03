import React, { memo } from 'react'
import { Card, Form, Input, Button, message } from 'antd';
import { LoginWrapper } from './style'
import Logo from '@/assets/image/logo.png'
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/store/modules/user';
import { useNavigate } from 'react-router-dom';

const Login = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (value) => {
    await dispatch(fetchLogin(value))
    navigate('/')
    message.success('登录成功')
  }
  return (
    <LoginWrapper>
      <Card className='login-container'>
        <img className='logo' src={Logo} alt="" />
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号格式'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码',
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button className='btn' type="primary" htmlType="submit" size="large" >登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </LoginWrapper>
  )
})

export default Login