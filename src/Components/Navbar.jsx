import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar fixed-top d-flex justify-content-evenly">
      <button
        onClick={() => navigate("/homepage")}
        className="esplora-btn bg-transparent text-light fw-bold rounded-5 border-0"
      >
        Esplora
      </button>

      <img src="BeWildlogo.png" alt="ToBeWild Logo" className="logo-navbar " />

      <Dropdown className="Login-btn ">
        <Dropdown.Toggle
          variant="trasparent"
          className="rounded-5 px-3 text-light d-flex border-0 align-items-center"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-lines-fill text-light"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-transparent border-0 ">
          <Dropdown.Item
            onClick={() => navigate("/login")}
            className="text-light bg-transparent "
          >
            Accedi
          </Dropdown.Item>
          <Dropdown.Item href="/register" className="text-light bg-transparent">
            Registrati
          </Dropdown.Item>
          <Dropdown.Item href="/support" className="text-light bg-transparent">
            Centro Assistenza
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Navbar;
