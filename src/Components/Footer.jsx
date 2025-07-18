import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer-obliquo shadow-lg">
        <Container>
          <Row className="text-white">
            <Col>
              <img src="/BeWildlogo.png" className="logo-navbar mt-5"></img>
              <p className="ms-2 mt-3 ">
                Esplora selvaggio, condividi l'avventura
              </p>
            </Col>
            <Col>
              <h5 className="mt-5 pt-3 text-center ">Contatti</h5>
              <hr className="text-white ms-auto me-auto w-50" />
              <div className="text-center ">
                <i class="bi bi-envelope-at ">
                  <a
                    href="#"
                    className=" ms-3  text-light text-decoration-none"
                  >
                    beWild@gmail.com
                  </a>
                </i>
              </div>
              <div className="mt-2 text-center ">
                <i class="bi bi-telephone">
                  <a href="#" className="text-light ms-3 text-decoration-none">
                    +39 145 678 910
                  </a>
                </i>
              </div>
              <div className="mt-2 mb-5 text-center ">
                <i class="bi bi-geo-alt text-light">
                  <a href="#" className="text-light text-decoration-none ms-3 ">
                    Torino, Italia
                  </a>
                </i>
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-evenly  ">
                <i class="bi bi-facebook mb-3  fs-4 "></i>
                <i class="bi bi-instagram fs-4 "></i>
                <i class="bi bi-youtube  fs-4 "></i>
              </div>
              <h5 className="footer-email pb-2  mt-3 ">Rimani aggiornato</h5>
              <div className="d-flex flex-wrap justify-content-center ">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control rounded-0 "
                  required
                ></input>
                <button className="esplora-btn border-0 mt-3 fw-bold bg-transparent text-white ">
                  Iscriviti
                </button>
              </div>
            </Col>
          </Row>
          <hr className="text-white" />
          <p className="text-center text-white smallmt-2 mt-2 ">
            © 2025 BeWild. Whit a lot of passion and adrenaline
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
