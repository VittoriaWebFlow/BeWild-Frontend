import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Homepage from "./Components/Homepage";
import "./App.css";
import LoginPage from "./Components/LoginPage";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/homepage" element={<Homepage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
