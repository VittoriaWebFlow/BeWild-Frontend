import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavbarPages = ({ setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex navbar-top-custom align-items-center justify-content-evenly">
      <Link className="text-decoration-none" to={"/preferiti"}>
        <i className="bi bi-heart text-light fs-5 d-flex ">
          <button className="text-light fw-medium  border-0 ms-2 fs-5 d-none bg-transparent d-md-block "></button>
        </i>
      </Link>

      <i class="bi bi-chat-right fs-5 text-light">
        <button className=" bg-transparent border-0"></button>{" "}
      </i>
      <Link to="/Homepage">
        <img
          src="/BeWildlogo.png"
          alt="ToBeWild Logo"
          className="logo-navbar"
        />
      </Link>
      <i class="bi bi-cart text-light fs-4">
        <button className="bg-transparent border-0"></button>
      </i>
      <Dropdown>
        <Dropdown.Toggle
          variant="trasparent"
          className="rounded-5 fs-3 text-light d-flex border-0 align-items-center"
        >
          <i class="bi bi-person"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-transparent border-0 ">
          <Dropdown.Item href="/support" className="text-light bg-transparent">
            Accedi
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
            className="text-light bg-transparent"
          >
            Esci
          </Dropdown.Item>
          <Dropdown.Item href="/support" className="text-light bg-transparent">
            Centro Assistenza
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NavbarPages;
