import React from "react";
import "../App.css";

const NavbarTop = () => {
  return (
    <div className="navbar-top-custom ">
      <div className="d-flex align-items-center justify-content-around ">
        <i className="bi bi-flower1 text-light fs-3 d-flex ">
          <a
            href="#"
            className="text-light text-decoration-none ms-2 fs-5 d-none d-md-block "
          >
            Terra
          </a>
        </i>
        <i className="bi bi-snow text-light fs-3 d-flex ">
          <a
            href="#"
            className="text-light text-decoration-none ms-2 fs-5 d-none d-md-block "
          >
            Neve
          </a>
        </i>
        <img src="BeWildlogo.png" alt="ToBeWild Logo" className="logo-navbar" />

        <i className="bi bi-water text-light fs-3 d-flex ">
          <a
            href="#"
            className="text-light text-decoration-none ms-2 fs-5 d-none d-md-block "
          >
            Acqua
          </a>
        </i>
        <i className="bi bi-wind text-light fs-3 d-flex ">
          <a
            href="#"
            className="text-light text-decoration-none ms-2 fs-5 d-none d-md-block "
          >
            Aria
          </a>
        </i>
      </div>
    </div>
  );
};

export default NavbarTop;
