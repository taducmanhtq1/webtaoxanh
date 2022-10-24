import { Breadcrumb, Typography } from "antd";
import "antd/dist/antd.css";
import React from "react";
const { Text } = Typography;

const BreadCrumb = () => (
  <Breadcrumb
    style={{
      margin: "16px 0",
      paddingTop: "15px",
    }}
  >
    <Breadcrumb.Item>
      <a href="./">
        <Text type="danger">Trang chủ</Text>
      </a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>iPhone 11 Pro Max</Breadcrumb.Item>
  </Breadcrumb>
);
export default BreadCrumb;
