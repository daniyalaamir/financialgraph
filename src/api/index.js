import axios from "axios";

let API_KEY = "18LKOMQ81TR6SIBG"

export const getQuarterlyData = async (type, symbol) => {
  return await axios.get(`https://www.alphavantage.co/query?function=${type}&symbol=${symbol}&apikey=${API_KEY}`);
}