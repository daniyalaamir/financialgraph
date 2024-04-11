import React from "react";
import { Card, Col, Row } from "antd";
import Chart from "../components/Chart";

function Home({ symbol }) {
  return (
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs="24" xl={24} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <Chart symbol={symbol} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
