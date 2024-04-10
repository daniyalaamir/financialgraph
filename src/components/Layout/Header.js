import React, { useEffect } from "react";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Header() {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <Row gutter={[24, 0]}>
      <Col span={24} md={6}>
        <div className="ant-page-header-heading">
          <span
            className="ant-page-header-heading-title"
            style={{ textTransform: "capitalize" }}
          >
            Quarterly Financial Data
          </span>
        </div>
      </Col>
      <Col span={24} md={18} className="header-control">
        <Input
          className="header-search"
          placeholder="Search symbol..."
          prefix={<SearchOutlined />}
        />
      </Col>
    </Row>
  );
}

export default Header;
