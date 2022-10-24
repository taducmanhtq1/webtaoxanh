import { Space, Typography, Cascader } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
const { Text } = Typography;

const options = [
  {
    value: "Tùy Chọn",
    label: "Tùy Chọn",
  },
  {
    value: "Sản phẩm bán chạy",
    label: "Sản phẩm bán chạy",
  },
];
const onChange = (value) => {
  console.log(value);
};
const ContentHead = () => (
  <div>
    <Row
      style={{
        paddingTop: "10px",
        paddingBottom: "20px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Col span={12}>
        <div className="contenthead">
          <h2>I PHONE 11 PRO MAX</h2>
        </div>
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
        <Space direction="horizontal">
          <Text>sắp xếp</Text>
          <Cascader
            style={{ width: "100%" }}
            defaultValue="Theo bảng chữ cái từ A-Z"
            options={options}
            onChange={onChange}
            size="large"
          />
        </Space>
        {/* <div style={{ display: "flex" }}>
          <p>sắp xếp</p>
          <div className="sort">
            <Cascader
              style={{ width: "100%" }}
              defaultValue="Theo bảng chữ cái từ A-Z"
              options={options}
              onChange={onChange}
              size="large"
            />
          </div>
        </div> */}
      </Col>
    </Row>
  </div>
);
export default ContentHead;
