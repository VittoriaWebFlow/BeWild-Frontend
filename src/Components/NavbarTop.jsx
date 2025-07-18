import React from "react";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavbarTop = ({ onCategoriaClick, onLogoClick, setUser, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <div className="navbar-top-custom ">
        <div className="d-flex align-items-center justify-content-around ">
          <i
            className="bi bi-heart text-light fs-5 d-flex"
            onClick={() => navigate("/preferiti")}
          ></i>
          <i class="bi bi-chat-right fs-5 text-light">
            <button className="text-light bg-transparent border-0"></button>
          </i>
          <i className="bi bi-flower1 text-light fs-5 d-flex align-items-center">
            <button
              className="text-light fw-medium  border-0 ms-2 fs-5 d-none bg-transparent d-md-block "
              onClick={() => onCategoriaClick("terra")}
            >
              Terra
            </button>
          </i>
          <i className="bi bi-snow text-light fs-5 d-flex align-items-center">
            <button
              className="text-light fw-medium text-decoration-none border-0 ms-2 fs-5 d-none bg-transparent d-md-block "
              onClick={() => onCategoriaClick("neve")}
            >
              Neve
            </button>
          </i>
          <img
            src="BeWildlogo.png"
            alt="ToBeWild Logo"
            className="logo-navbar"
            style={{ cursor: "pointer" }}
            onClick={onLogoClick}
          />

          <i className="bi bi-water text-light fs-5 d-flex align-items-center">
            <button
              className="text-light fw-medium text-decoration-none border-0 ms-2 fs-5 d-none bg-transparent d-md-block "
              onClick={() => onCategoriaClick("acqua")}
            >
              Acqua
            </button>
          </i>

          <i className="bi bi-wind text-light fs-5 d-flex align-items-center">
            <button
              className="text-light fw-medium text-decoration-none border-0 ms-2 fs-5  d-none bg-transparent d-md-block "
              onClick={() => onCategoriaClick("cielo")}
            >
              Cielo
            </button>
          </i>
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

            <Dropdown.Menu className="bg-transparent border-0">
              {!user ? (
                <Dropdown.Item
                  onClick={() => navigate("/login")}
                  className="text-light bg-transparent"
                >
                  Accedi
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  onClick={() => {
                    setUser(null);
                    navigate("/");
                  }}
                  className="text-light bg-transparent"
                >
                  Esci
                </Dropdown.Item>
              )}

              <Dropdown.Item
                href="/support"
                className="text-light bg-transparent"
              >
                Centro Assistenza
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default NavbarTop;
