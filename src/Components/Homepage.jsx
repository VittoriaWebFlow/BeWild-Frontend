import React from "react";
import NavbarTop from "./NavbarTop";
import Sidebar from "./Sidebar";
import "../App.css";

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <NavbarTop />
      <div className="content-wrapper p-4">
        <h2 className="text-white">Esperienze disponibili</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt="Esperienza"
              />
              <div className="card-body">
                <h5 className="card-title">Paracadutismo</h5>
                <p className="card-text">
                  Vivi un salto mozzafiato da 4000 metri!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
