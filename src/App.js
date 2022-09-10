import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Navbar />
              <Project />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
