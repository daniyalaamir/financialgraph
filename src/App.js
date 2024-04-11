import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
