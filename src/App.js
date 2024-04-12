import React, { useState } from "react";
import { Layout } from "antd";
import Home from "./pages/Home";
import Main from "./components/Layout";
import Header from "./components/Layout/Header";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

const { Header: AntHeader } = Layout;

function App() {
  const [symbol, setSymbol] = useState("IBM");
  
  const handleSearch = searchTerm => {
    setSymbol(searchTerm || "IBM");
  };

  return (
    <Main>
      <AntHeader>
        <Header onSearch={handleSearch} />
      </AntHeader>
      <Home symbol={symbol} />
    </Main>
  );
}

export default App;
