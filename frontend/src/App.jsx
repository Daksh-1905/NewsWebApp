import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllNewsPage from "./pages/AllNewsPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/Homepage";
import SavedNewsPage from "./pages/SavedNewsPage";

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
      <Routes>
        <Route
          exact
          path="/business"
          element={
            <AllNewsPage mode={mode} category="business" key="business" />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <AllNewsPage
              mode={mode}
              category="entertainment"
              key="entertainment"
            />
          }
        />
        <Route
          exact
          path="/general"
          element={<AllNewsPage mode={mode} category="general" key="general" />}
        />
        <Route
          exact
          path="/health"
          element={<AllNewsPage mode={mode} category="health" key="health" />}
        />
        <Route
          exact
          path="/science"
          element={<AllNewsPage mode={mode} category="science" key="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<AllNewsPage mode={mode} category="sports" key="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={
            <AllNewsPage mode={mode} category="technology" key="technology" />
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/saved" element={<SavedNewsPage />} />
      </Routes>
    </>
  );
};

export default App;
