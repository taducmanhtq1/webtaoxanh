import { Col, Row, Dropdown, Menu, Space, Typography } from "antd";
import { DownOutlined, PhoneOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import React from "react";
const { Text } = Typography;
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            menu item 1
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            menu item 2
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            menu item 3
          </a>
        ),
      },
      {
        key: "4",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            menu item 4
          </a>
        ),
      },
    ]}
  />
);
const menu1 = (
  <Menu
    items={[
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
        key: "0",
      },
      {
        type: "divider",
      },
      {
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
        key: "1",
      },
    ]}
  />
);

const HeaderBot = () => (
  <Row>
    <Col span={4}>
      <a href="./">
        <img src="https://theme.hstatic.net/1000359786/1000457332/14/logo.png?v=1309" />
      </a>
    </Col>
    <Col span={16}>
      <Row>
        <Col span={4} style={{ textAlign: "center" }}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space direction="vertical">
                <img src="https://theme.hstatic.net/1000359786/1000457332/14/hd_mainmenu_icon_hover1.png?v=1309" />
                <h4>IPHONE</h4>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space direction="vertical">
                <img src="https://theme.hstatic.net/1000359786/1000457332/14/hd_mainmenu_icon_hover1.png?v=1309" />
                <h4>IPHONE</h4>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space direction="vertical">
                <img src="https://theme.hstatic.net/1000359786/1000457332/14/hd_mainmenu_icon_hover1.png?v=1309" />
                <h4>IPHONE</h4>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space direction="vertical">
                <img src="https://theme.hstatic.net/1000359786/1000457332/14/hd_mainmenu_icon_hover1.png?v=1309" />
                <h4>IPHONE</h4>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space direction="vertical">
                <img src="https://theme.hstatic.net/1000359786/1000457332/14/hd_mainmenu_icon_hover1.png?v=1309" />
                <h4>IPHONE</h4>
              </Space>
            </a>
          </Dropdown>
        </Col>
        <Col span={4} style={{ textAlign: "center" }}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space direction="vertical">
                <img src="https://theme.hstatic.net/1000359786/1000457332/14/hd_mainmenu_icon_hover1.png?v=1309" />
                <h4>IPHONE</h4>
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Col>
    <Col span={4}>
      <Space direction="vertical">
        <a>
          <PhoneOutlined style={{ color: "green" }} />
          <Text type="danger">Hotline: 0934.667.000</Text>
        </a>

        <Dropdown overlay={menu1}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Text>318 Hồ Tùng Mậu, Hà Nội</Text>
              <DownOutlined style={{ color: "black" }} />
            </Space>
          </a>
        </Dropdown>
      </Space>
    </Col>
  </Row>
);
export default HeaderBot;
