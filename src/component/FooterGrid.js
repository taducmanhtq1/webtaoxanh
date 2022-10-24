import { Col, Row, Typography, Space } from "antd";
import React from "react";
import { Card } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const { Text, Link } = Typography;
const FooterGrid = () => (
  <div>
    <Row>
      <Col md={6} sm={12} xs={24}>
        <Card
          bordered={false}
          style={{
            width: "100%",
          }}
        >
          <h3>TÁO XANH</h3>

          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>

          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
        </Card>
      </Col>
      <Col md={6} sm={12} xs={24}>
        <Card
          bordered={false}
          style={{
            width: "100%",
          }}
        >
          <h3>TÁO XANH</h3>

          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>

          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
        </Card>
      </Col>
      <Col md={6} sm={12} xs={24}>
        <Card
          bordered={false}
          style={{
            width: "100%",
          }}
        >
          <h3>TÁO XANH</h3>

          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>

          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
          <Space>
            <CaretRightOutlined
              style={{
                color: "#000",
              }}
            />
            <Link href="./">Quan điểm chất lượng </Link>
          </Space>
        </Card>
      </Col>
      <Col md={6} sm={12} xs={24}>
        <Card
          bordered={false}
          style={{
            width: "100%",
          }}
        >
          <h3>
            ĐỊA CHỈ: 318 HỒ TÙNG MẬU, HÀ NỘI (NGÃ TƯ GIAO NGUYỄN ĐỔNG CHI)
          </h3>
          <Space direction="vertical">
            <Text>
              Gọi mua hàng: <b>02462.590.590</b>
            </Text>
            <Text>
              Kỹ thuật và bảo hành: <b>02462.53.22.14</b>
            </Text>
            <Link href="./">Xem bản đồ</Link>
          </Space>
        </Card>
      </Col>
    </Row>
  </div>
);
export default FooterGrid;
