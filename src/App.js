import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Market from "./pages/Market";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </header>

      <main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market-place" element={<Market />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
          // {
          //   /* // <Route path="/" element={< />} /> */
          // }
