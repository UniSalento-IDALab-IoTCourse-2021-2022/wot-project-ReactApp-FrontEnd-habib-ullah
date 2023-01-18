import React, { useState } from "react";
// useState
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Preferences } from "./components/Preferences/Preferences";
import { Login } from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();
  const tokenL = localStorage.getItem("token");
  const initialValue = JSON.parse(tokenL);
  if (!initialValue) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
