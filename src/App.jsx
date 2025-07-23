import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Homepage from "./Components/Homepage";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import EsperienzaDettaglio from "./Components/EsperienzaDettaglio";
import Preferiti from "./Components/Preferiti";
import Carrello from "./Components/Carrello";
import { CarrelloProvider } from "./context/CarrelloContext";

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
  const [preferiti, setPreferiti] = useState([]);

  return (
    <CarrelloProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route
            path="/homepage"
            element={
              <Homepage
                user={user}
                setUser={setUser}
                preferiti={preferiti}
                setPreferiti={setPreferiti}
              />
            }
          />
          <Route
            path="/esperienze/:id"
            element={
              <EsperienzaDettaglio
                preferiti={preferiti}
                setPreferiti={setPreferiti}
                user={user}
              />
            }
          />
          <Route
            path="/preferiti"
            element={
              <Preferiti preferiti={preferiti} setPreferiti={setPreferiti} />
            }
          />
          <Route path="/carrello" element={<Carrello />} />
        </Routes>
      </BrowserRouter>
    </CarrelloProvider>
  );
}
export default App;
