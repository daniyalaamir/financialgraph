import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import lineChart from "./config/lineChart";
import { getQuarterlyData } from "../../api";

let apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;

const Chart = ({ symbol }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (data.length === 0) apiKey = "demo";
        const incomeStatementResponse = await getQuarterlyData('INCOME_STATEMENT', symbol, apiKey);
        const balanceSheetResponse = await getQuarterlyData('BALANCE_SHEET', symbol, apiKey);
        const combinedData = processData(incomeStatementResponse.data, balanceSheetResponse.data);
        setData(combinedData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [symbol]);

  const processData = (incomeStatementData, balanceSheetData) => {
    return incomeStatementData?.quarterlyReports?.map((incomeReport, index) => ({
      date: incomeReport.fiscalDateEnding,
      netIncome: parseFloat(incomeReport.netIncome),
      totalRevenue: parseFloat(incomeReport.totalRevenue),
      totalShareholderEquity: parseFloat(balanceSheetData?.quarterlyReports[index].totalShareholderEquity),
    }));
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (!data || data.length === 0) ? (
    <div>Data not available.</div>
  ) : (
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
  );
}

export default Chart;
