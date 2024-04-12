import React, { useState, useEffect } from "react";
import { Row, Col, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => window.scrollTo(0, 0));

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

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
        <Row justify="end" gutter={8} align="middle">
          <Col>
            <Input
              className="header-search"
              placeholder="Search symbol..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={handleSearch} type="primary">
              Submit
            </Button>
          </Col>
          <Col>
            <Button onClick={handleClear} type="default">
              Clear
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Header;
