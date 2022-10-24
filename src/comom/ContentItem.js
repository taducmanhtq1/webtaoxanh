import { Card, Typography } from "antd";
import React from "react";
import "antd/dist/antd.css";

const { Meta } = Card;
const { Text } = Typography;
const ContentItem = () => (
  <Card
    hoverable
    style={{
      padding: "10px",
    }}
    cover={
      <a href="./">
        <img
          className="picture-banner"
          alt="example"
          src="https://product.hstatic.net/1000359786/product/2_c9a3b4f8392d42bda7ac8d85c9c6318d_medium.jpg"
        />
      </a>
    }
  >
    <a href="./">
      <Text>iPhone 11 Pro Max 256GB Quốc tế cũ 99% - Đen xám</Text>
    </a>
    <Meta title="14.000.000" description="" style={{ color: "red" }} />
  </Card>
);
export default ContentItem;
