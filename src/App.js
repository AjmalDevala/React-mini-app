import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListings from "./container/ProductListings";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListings />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;