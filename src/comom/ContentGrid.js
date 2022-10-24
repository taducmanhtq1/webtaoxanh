import { Col, Row } from "antd";
import React from "react";
import ContentItem from "./ContentItem";
const ContentGrid = () => (
  <>
    <Row>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
      <Col xl={10} md={6} sm={8}>
        <ContentItem />
      </Col>
    </Row>
  </>
);
export default ContentGrid;
