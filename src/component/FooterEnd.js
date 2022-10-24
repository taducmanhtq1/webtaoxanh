import { Col, Row, Typography, Space } from "antd";
import React from "react";
const { Text } = Typography;
const FooterEnd = () => (
  <div>
    <Row>
      <Col span={12}>
        <Text>
          CHẤP NHẬN THANH TOÁN: <b>TIỀN MẶT, ATM, VISA, MASTERCARD</b>
        </Text>
        <Text>
          Copyrights © 2019. Bản quyền thuộc về Táo Xanh - Mua sự yên tâm. Chịu
          trách nhiệm nội dung: Trung Hiếu
        </Text>
      </Col>
      <Col span={12} style={{ display: "flex", justifyContent: "end" }}>
        <Space direction="vertical">
          <div>
            <a href="./">
              <img
                className="footer-img"
                src="//theme.hstatic.net/1000359786/1000457332/14/footer-bct.png?v=1312"
                alt="Táo Xanh - Mua sự yên tâm"
              />
            </a>
          </div>
          <Space direction="horizontal">
            <a href="./">Chính sách bảo mật</a>
            <a href="./">Sitemap</a>
          </Space>
        </Space>
      </Col>
    </Row>
  </div>
);
export default FooterEnd;
