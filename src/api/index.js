import axios from "axios";

const API_BASE_URL = 'https://www.alphavantage.co/query';
const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY || "demo";

export const getQuarterlyData = async (type, symbol) => {
  return await axios.get(`${API_BASE_URL}?function=${type}&symbol=${symbol}&apikey=${API_KEY}`);
}
