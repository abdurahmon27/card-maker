// App.js
import React from "react";
import Navbar from "./components/navbar";
import Frame from "./components/Frame/Frames";
import Card from "./components/CardMaker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import frameData from "./components/Frame/frameData";

function App() {
  return (
    <Router>
      <div className="container mx-auto flex items-center justify-center flex-col relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Frame frameData={frameData} />} />
          <Route path="/card/:id/:frameId" element={<Card frameData={frameData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
