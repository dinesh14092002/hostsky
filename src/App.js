import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer"; // Make sure this file exists
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import Ourwork from "./pages/Ourwork";
import './App.css'; // Custom styles
import './index.css';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourwork" element={<Ourwork />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </main>
      <Footer /> {/* ✅ This correctly uses the Footer component */}
    </div>
  </Router>
);

export default App;
