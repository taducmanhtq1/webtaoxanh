import { Input, Space, Col, Row, Typography } from "antd";
import "antd/dist/antd.css";
import React from "react";
const { Search } = Input;
const { Text } = Typography;

const onSearch = (value) => console.log(value);
const HeaderTop = () => (
  <>
    <Row>
      <Col span={8}>
        <a href="./">
          <Text style={{ color: "#fff" }}>
            |20/10| TẶNG QUÀ & GIẢM GIÁ TỚI 500K
          </Text>
        </a>
      </Col>
      <Col span={8} className="input">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: "100%",
          }}
        />
      </Col>
      <Col span={8}>
        <a href="./" className="right">
          <Text
            className=""
            style={{
              color: "#fff",
              borderRight: "#fff solid 1px",
              paddingRight: "10px",
            }}
          >
            Mới mua máy
          </Text>
          <Text className="" style={{ color: "#fff", paddingLeft: "10px" }}>
            Văn hóa táo xanh
          </Text>
        </a>
      </Col>
    </Row>
  </>

  // <Space direction="horizontal" className="header_top">
  //   <div>
  //     <a href="./">|20/10| TẶNG QUÀ & GIẢM GIÁ TỚI 500K</a>
  //   </div>
  //   <div>
  //     <Search
  //       placeholder="input search text"
  //       onSearch={onSearch}
  //       style={{
  //         width: 400,
  //       }}
  //     />
  //   </div>
  //   <div className="">
  //     <a className="header-text-right" href="./">
  //       Mới mua máy
  //     </a>
  //     <a className="header-text-left" href="./">
  //       Văn hoá Táo Xanh
  //     </a>
  //   </div>
  // </Space>
);
export default HeaderTop;
