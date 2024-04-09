import { Layout, Menu, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
  Html5Outlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import "./index.scss";

const { Header, Sider } = Layout;

const GeekLayout = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
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
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="1">
              自带-数据概览
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="2">
              自带-内容管理
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="3">
              自带-发布文章
            </Menu.Item>
            <Menu.Item icon={<Html5Outlined />} key="4">
              HTML CSS-仿写b站
            </Menu.Item>
            <Menu.Item icon={<DeploymentUnitOutlined />} key="5">
              状态管理-mobx练习
            </Menu.Item>
            <Menu.Item icon={<DeploymentUnitOutlined />} key="6">
              状态管理-redux练习
            </Menu.Item>
            <Menu.Item icon={<DeploymentUnitOutlined />} key="7">
              状态管理-Zustand练习
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          内容
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GeekLayout;
