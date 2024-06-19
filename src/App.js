import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/news/News";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            exact
            path="/NewsWebApp"
            element={<News mode={mode} category="general" key="general" />}
          />
          <Route
            exact
            path="/business"
            element={<News mode={mode} category="business" key="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News mode={mode} category="entertainment" key="entertainment" />
            }
          />
          <Route
            exact
            path="/general"
            element={<News mode={mode} category="general" key="general" />}
          />
          <Route
            exact
            path="/health"
            element={<News mode={mode} category="health" key="health" />}
          />
          <Route
            exact
            path="/science"
            element={<News mode={mode} category="science" key="science" />}
          />
          <Route
            exact
            path="/sports"
            element={<News mode={mode} category="sports" key="sports" />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News mode={mode} category="technology" key="technology" />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
