import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavbarPages from "./NavbarPages";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Preferiti = ({ preferiti, setPreferiti }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarPages />
      <Sidebar />

      <main className="flex-grow-1">
        <Container className="content-wrapper">
          <h3 className="text-light text-center">PREFERITI</h3>
          <hr className="text-light border-5 w-75 ms-auto me-auto" />

          {preferiti.length === 0 ? (
            <p className="text-center center-words fs-1 fw-bolder text-light">
              Nessuna attività nei preferiti
            </p>
          ) : (
            <Row className="justify-content-center mt-5">
              {preferiti.map((exp) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={exp.id}
                  className="d-flex justify-content-center"
                >
                  <Card className="custom-card mb-1 rounded-5 shadow border-0 mt-5 ms-auto me-auto">
                    <Card.Img
                      variant="top"
                      src={exp.immagine}
                      alt={exp.titolo}
                      className="card-img-top"
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="fs-5 mb-2 text-center">
                        {exp.titolo}
                      </Card.Title>
                      <p className="card-text text-center small mb-2">
                        {exp.descrizione}
                      </p>
                      <hr className="w-75 ms-auto me-auto mt-1 mb-2" />
                      <div className="d-flex justify-content-evenly px-2">
                        <p className="fw-bold">{exp.prezzo} €</p>
                        <p>
                          Adrenalina: <strong>{exp.livelloAdrenalina}</strong>
                        </p>
                      </div>
                      <div className="text-center mb-1">
                        <i
                          className={
                            preferiti.some((p) => p.id === exp.id)
                              ? "bi bi-heart-fill text-dark fs-5"
                              : "bi bi-heart text-white fs-5"
                          }
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setPreferiti((prev) =>
                              prev.filter((p) => p.id !== exp.id)
                            )
                          }
                        ></i>
                      </div>
                      <div className="text-center small mt-0">
                        <i className="bi bi-stopwatch me-1" /> {exp.durata}
                      </div>
                      <div className="text-center small mt-0">
                        <i className="bi bi-compass me-1" /> {exp.localita}
                      </div>
                      <div className="text-center small">
                        <i className="bi bi-wind me-1" /> {exp.categoria.nome}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          <div className="text-center mt-5">
            <button
              onClick={() => navigate("/homepage")}
              className="esplora-btn text-light border-0 bg-transparent fw-bold mt-4"
            >
              Trova altre esperienze
            </button>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Preferiti;
