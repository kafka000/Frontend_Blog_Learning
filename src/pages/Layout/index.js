import { Layout, Menu, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
  Html5Outlined,
  DeploymentUnitOutlined,
  AlibabaOutlined
} from "@ant-design/icons";
import "./index.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
// 副作用
import { useEffect } from "react";
// mobx
import { observer} from 'mobx-react-lite'
// 获取用户数据
import { useStore } from "@/store";
// 导入useNavigate函数
import { useNavigate } from 'react-router-dom'


const { Header, Sider } = Layout;

const GeekLayout = () => {
  const location = useLocation();
  const selectKey = location.pathname;
  // 这里语法？
  const {userStore,loginStore} = useStore()
  // 利用Hooks副作用发请求
  useEffect(()=>{
    try {
      userStore.getUserInfo()
    } catch{ }
  },[userStore])

  // log out
  const navigate= useNavigate()
  const logout = () => {
    loginStore.logOut()
    navigate('/login')
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          {/* 发请求获取用户名称数据渲染 直接可以指定key获取？*/}
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={logout}>
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
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectKey]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="1">
              <Link to="home">博客项目-数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              <Link to="article">博客项目-内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="3">
              <Link to="publish">博客项目-发布文章</Link>
            </Menu.Item>
            <Menu.Item icon={<Html5Outlined />} key="4">
              <Link to="basic">HTML CSS-基础</Link>
            </Menu.Item>
            <Menu.Item icon={<Html5Outlined />} key="5">
              <Link to="bilibili">HTML CSS-仿写b站</Link>
            </Menu.Item>
            <Menu.Item icon={<Html5Outlined />} key="6">
              <Link to="basic">JS-基础</Link>
            </Menu.Item>
            <Menu.Item icon={<DeploymentUnitOutlined />} key="7">
            <Link to="mobx"> 状态管理-mobx练习</Link>
            </Menu.Item>
            <Menu.Item icon={<DeploymentUnitOutlined />} key="8">
              状态管理-redux练习
            </Menu.Item>
            <Menu.Item icon={<DeploymentUnitOutlined />} key="9">
              状态管理-Zustand练习
            </Menu.Item>
            <Menu.Item icon={<AlibabaOutlined />} key="10">
              React-Hooks练习
            </Menu.Item>
            <Menu.Item icon={<AlibabaOutlined />} key="11">
              React-Router练习
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default observer(GeekLayout);
