import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_ALPHA_VANTAGE_API_BASE_URL;

export const getQuarterlyData = async (type, symbol, apiKey) => {
  return await axios.get(`${API_BASE_URL}?function=${type}&symbol=${symbol}&apikey=${apiKey}`);
}