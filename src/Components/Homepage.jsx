import React, { useEffect, useState } from "react";
import NavbarTop from "./NavbarTop";
import Sidebar from "./Sidebar";
import "../App.css";
import axios from "axios";
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Homepage = ({ user, setUser, preferiti, setPreferiti }) => {
  const [esperienze, setEsperienze] = useState([]);
  const [categoriaAttiva, setCategoriaAttiva] = useState("tutte");
  const [searchCard, setSearchCard] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllEsperienze();
  }, []);

  const fetchAllEsperienze = () => {
    axios
      .get("http://localhost:8081/esperienze")
      .then((res) => {
        setEsperienze(res.data);
        setCategoriaAttiva("tutte");
      })
      .catch((err) => console.error("Errore nel caricamento", err));
  };

  const handleCategoriaClick = (categoriaNome) => {
    axios
      .get(
        `http://localhost:8081/esperienze/filtro/categoria?categoria=${categoriaNome}`
      )
      .then((res) => {
        setEsperienze(res.data);
        setCategoriaAttiva(categoriaNome.toLowerCase());
      })
      .catch((err) => console.error("Errore nel filtro categoria", err));
  };

  const handleCardClick = (id) => {
    navigate(`/esperienze/${id}`);
  };

  const togglePreferito = (exp) => {
    if (!user) {
      setShowPopup(true);
      return;
    }

    const isGiaNeiPreferiti = preferiti.some((p) => p.id === exp.id);

    if (isGiaNeiPreferiti) {
      setPreferiti((prev) => prev.filter((p) => p.id !== exp.id));
    } else {
      setPreferiti((prev) => [...prev, exp]);
    }
  };

  const esperienzeFiltrate = esperienze.filter(
    (exp) =>
      exp.titolo.toLowerCase().includes(searchCard.toLowerCase()) ||
      exp.localita.toLowerCase().includes(searchCard.toLowerCase())
  );

  return (
    <div>
      <Sidebar />
      <NavbarTop
        onCategoriaClick={handleCategoriaClick}
        onLogoClick={fetchAllEsperienze}
        setUser={setUser}
        user={user}
      />

      <div className="forum">
        <img
          src={`/banners/${categoriaAttiva}.jpg`}
          className="forum-img"
          alt="banner categoria"
        />
      </div>
      <hr className="mt-0 text-black border-5" />

      <Container className="content-wrapper mt-0">
        <div className="input-container shadow-lg">
          <input
            type="text"
            value={searchCard}
            onChange={(e) => setSearchCard(e.target.value)}
            required
            placeholder=" "
          />
          <label className="fs-5">
            <i className="bi bi-search me-2 fs-5" /> Cerca attività o luogo
          </label>
        </div>

        <Row className=" d-flex justify-content-center">
          {esperienzeFiltrate.map((exp) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={exp.id}
              className="d-flex justify-content-center"
            >
              <Card
                onClick={() => handleCardClick(exp.id)}
                className="custom-card mb-1 rounded-5 shadow border-0 mt-5 ms-auto me-auto"
              >
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
                          : "bi bi-heart fs-5"
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePreferito(exp);
                      }}
                    ></i>
                  </div>

                  <div className="text-center small mt-0">
                    <i className="bi bi-stopwatch me-1" /> {exp.durata}
                  </div>
                  <div className="text-center small mt-0">
                    <i className="bi bi-compass me-1" /> {exp.localita}
                  </div>
                  <div className="text-center small">
                    <i className="bi bi-globe-europe-africa text-dark me-1" />{" "}
                    {exp.categoria.nome}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Body className="bg-dark fs-4 text-center text-light">
          Accesso necessario
        </Modal.Body>
        <Modal.Body className="bg-dark text-light text-center fw-light ">
          Effettua l'accesso per aggiungere esperienze ai preferiti.
        </Modal.Body>
        <Modal.Body className="bg-dark d-flex justify-content-center">
          <Button className="esplora-btn" onClick={() => setShowPopup(false)}>
            Chiudi
          </Button>
        </Modal.Body>
      </Modal>
      <Card className="bg-dark text-white rounded-0 border-0 mt-5 ">
        <Card.Img
          src="/banners/cielo.jpg"
          alt="Card image"
          className="Card-img rounded-0 "
        />
        <Card.ImgOverlay className=" text-center">
          <h2 className="ms-4 mt-5 pt-5 fw-lighter forum-title">
            Onde di idee
          </h2>
          <button className="border-0 ms-5 esplora-btn mt-5 text-light bg-transparent">
            Forum
          </button>
        </Card.ImgOverlay>
      </Card>
      <hr className="text-white w-100 ms-auto mt-5 me-auto hr-custom" />

      <Footer />
    </div>
  );
};

export default Homepage;
