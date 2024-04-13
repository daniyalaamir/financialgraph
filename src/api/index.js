import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_ALPHA_VANTAGE_API_BASE_URL;
let API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;

export const getQuarterlyData = async (type, symbol) => {
  return await axios.get(`${API_BASE_URL}?function=${type}&symbol=${symbol}&apikey=${API_KEY}`);
}