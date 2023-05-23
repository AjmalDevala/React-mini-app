import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ErrorPage from "./container/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route path="/" element={<Header />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;