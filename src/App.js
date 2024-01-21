import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:itemId" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
