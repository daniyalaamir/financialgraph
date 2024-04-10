import React from "react";
import { Layout, Drawer } from "antd";
import Header from "./Header";
import Sidebar from "./Sidebar";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({ children }) {
  return (
    <Layout className="layout-dashboard">
      <Drawer
        title={false}
        placement="left"
        closable={false}
        key="left"
        className="drawer-sidebar"
      >
        <Layout className="layout-dashboard">
          <Sider
            trigger={null}
            theme="light"
            className="sider-primary ant-layout-sider-primary"
          >
            <Sidebar />
          </Sider>
        </Layout>
      </Drawer>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={250}
        theme="light"
        className="sider-primary ant-layout-sider-primary"
      >
        <Sidebar />
      </Sider>
      <Layout>
        <AntHeader>
          <Header />
        </AntHeader>
        <Content className="content-ant">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default Main;
