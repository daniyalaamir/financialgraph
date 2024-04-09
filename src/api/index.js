import axios from "axios";

const API_BASE_URL = 'https://www.alphavantage.co/query';

export const getQuarterlyData = async (type, symbol, apiKey) => {
  return await axios.get(`${API_BASE_URL}?function=${type}&symbol=${symbol}&apikey=${apiKey}`);
}