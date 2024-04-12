import React from "react";
import { Col, Row } from "antd";
import Chart from "../components/Chart";

function Home({ symbol }) {
  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24} className="mb-24">
          <Chart symbol={symbol} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
