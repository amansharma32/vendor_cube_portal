import React from "react";
import { Card, Space } from "antd";
import SideMenu from "./Sidebar/SideMenu/SideMenu";
import PageContent from "./Sidebar/PageContents/PageContent";
import Footer from "./Footer";

const Win = () => {
  return (
    <>
      <div className="App">
        <Space className="SideMenuandPageContent">
          <SideMenu />
          <PageContent />
        </Space>
        <Footer />
      </div>
    </>
  );
};

export default Win;
