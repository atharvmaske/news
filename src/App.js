import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/news"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={6} country="in" category="health" />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={6} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
