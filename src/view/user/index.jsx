import React, { Suspense, memo, useEffect } from 'react'
import { Layout, Menu, Popconfirm } from 'antd'
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authRoute from '@/components/authRoute'
import { UserWrapper } from './style'
import { clearUserInfo, fetchUserInfo } from '@/store/modules/user';

const User = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  

  // 定义内部的数据
  const name = useSelector(state => state.user.userInfo.name)
  const selectedKeys = location.pathname
  const { Header, Sider } = Layout
  const items = [
    {
      label: '首页',
      key: '/home',
      icon: <HomeOutlined />,
    },
    {
      label: '文章管理',
      key: '/article',
      icon: <DiffOutlined />,
    },
    {
      label: '创建文章',
      key: '/publish',
      icon: <EditOutlined />,
    },
  ]

  // 路由跳转
  const onMenuClick = (e) => {
    const path = e.key
    navigate(path)
  }

  // 组件加载时获取用户信息
  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])

  //退出回调
  const onConfirm = () => {
    dispatch(clearUserInfo())
    navigate('/login')
  }

  return (
    <UserWrapper>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <div className="user-info">
            <span className="user-name">{name}</span>
            <span className="user-logout">
              <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm} >
                <LogoutOutlined /> 退出
              </Popconfirm>
            </span>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              theme="dark"
              selectedKeys={selectedKeys}
              onClick={onMenuClick}
              items={items}
              style={{ height: '100%', borderRight: 0 }}></Menu>
          </Sider>
          <Layout className="layout-content" style={{ padding: 20 }}>
            <Suspense fallback="加载中...">
              <Outlet/>
            </Suspense>
          </Layout>
        </Layout>
      </Layout>
    </UserWrapper>
  )
})

export default authRoute(User)