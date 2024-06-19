import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact  path="/" element={<Home setProgress={setProgress} />} />
          <Route exact  path="/home" element={<Home setProgress={setProgress} />} />
          <Route exact  path="/about" element={<About setProgress={setProgress} />} />
          <Route
            exact
            path="/news"
            element={
              <News setProgress={setProgress}
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
              <News setProgress={setProgress}
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
              <News setProgress={setProgress}
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
              <News setProgress={setProgress}
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
              <News setProgress={setProgress}
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
              <News setProgress={setProgress}
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={setProgress}
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
