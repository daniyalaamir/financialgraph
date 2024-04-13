import React, { useState, useEffect } from "react";
import { Card, Alert, Spin } from 'antd';
import { getQuarterlyData } from "../../api";
import ReactApexChart from "react-apexcharts";
import lineChart from "./config/lineChart";

const Chart = ({ symbol }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const incomeStatementResponse = await getQuarterlyData('INCOME_STATEMENT', symbol);
        const balanceSheetResponse = await getQuarterlyData('BALANCE_SHEET', symbol);
        const combinedData = processData(incomeStatementResponse.data, balanceSheetResponse.data);
        setData(combinedData);
        setLoading(false);
        setError(null)
      } catch (error) {
        setError("Error fetching data: " + error);
        setLoading(false);
      }
    };
    fetchData();
  }, [symbol]);

  useEffect(() => {
    setLoading(false);
  }, [error])

  const processData = (incomeStatementData, balanceSheetData) => {
    return incomeStatementData?.quarterlyReports?.map((incomeReport, index) => ({
      date: incomeReport.fiscalDateEnding,
      netIncome: parseFloat(incomeReport.netIncome),
      totalRevenue: parseFloat(incomeReport.totalRevenue),
      totalShareholderEquity: parseFloat(balanceSheetData?.quarterlyReports[index]?.totalShareholderEquity),
    }));
  }

  if (loading) {
    return (
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    )
  };

  if (error) return <Alert message={error} type="error" showIcon />;

  return (!data || data.length === 0) ? (
    <Alert message="Data not available" type="info" showIcon />
  ) : (
    <Card bordered={false} className="criclebox h-full">
      <ReactApexChart 
        type="line"
        width="100%"
        height={635}
        options={lineChart.options}
        series={[
          { name: 'Net Income', data: data.map(item => [new Date(item.date).getTime(), item.netIncome]) },
          { name: 'Total Revenue', data: data.map(item => [new Date(item.date).getTime(), item.totalRevenue]) },
          { name: 'Total Shareholder Equity', data: data.map(item => [new Date(item.date).getTime(), item.totalShareholderEquity]) },
        ]}
      />
    </Card>
  );
}

export default Chart;
