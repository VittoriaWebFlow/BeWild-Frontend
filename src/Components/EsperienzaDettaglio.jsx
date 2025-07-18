import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import NavbarPages from "./NavbarPages";
import MappaTest from "./MappaTest";

const EsperienzaDettaglio = ({ preferiti, setPreferiti, user }) => {
  const { id } = useParams();
  const [esperienza, setEsperienza] = useState(null);
  const [recensioni, setRecensioni] = useState([]);
  const recensioniRef = useRef(null);
  const [mostraTutte, setMostraTutte] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/esperienze/${id}`)
      .then((res) => setEsperienza(res.data))
      .catch((error) => console.error("Errore nel caricamento", error));

    axios
      .get(`http://localhost:8081/recensioni/esperienza/${id}`)
      .then((res) => setRecensioni(res.data))
      .catch((err) => console.error("Errore nel caricamento recensioni", err));
  }, [id]);

  if (!esperienza) {
    return <p className="text-center mt-5">Caricamento in corso...</p>;
  }

  const Recensioni = () => {
    recensioniRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const aggiungiAiPreferiti = () => {
    if (!user) {
      setShowPopup(true);
      return;
    }

    const giàAggiunta = preferiti.some((exp) => exp.id === esperienza.id);
    if (!giàAggiunta) {
      setPreferiti((prev) => [...prev, esperienza]);
    }
  };

  return (
    <div>
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

      <Sidebar />
      <NavbarPages />
      <Container className="mt-5 pt-5 d-flex content-wrapper">
        <Row>
          <Col>
            <div className="pt-5 mt-5 d-flex justify-content-evenly">
              <img
                src={esperienza.immagine}
                alt={esperienza.titolo}
                className="img-fluid mb-4 shadow-lg"
              />
            </div>
            <h3 className="esperienza-titolo mb-4 text-dark text-center">
              {esperienza.titolo}
            </h3>

            <div className="d-flex justify-content-between pt-3 align-items-center">
              <div className="d-flex align-items-center">
                <i className="bi bi-suit-heart-fill text-light me-2"></i>
                <button
                  className="text-decoration-underline bg-transparent border-0 text-light"
                  onClick={aggiungiAiPreferiti}
                >
                  Aggiungi ai preferiti
                </button>
              </div>

              <div className="d-flex align-items-center">
                <button
                  onClick={Recensioni}
                  className="me-2 text-light bg-transparent d-flex border-0 text-decoration-underline"
                >
                  {recensioni.length} recensioni
                </button>

                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning ms-1"></i>
                ))}
              </div>
            </div>

            <div className="d-flex justify-content-end pt-5">
              <i className="bi bi-tag text-light fs-5 me-3"></i>
              <span className="text-light fs-5 fw-bold">
                da {esperienza.prezzo} € a persona
              </span>
            </div>
            <p className="text-light mt-1 fw-light d-flex justify-content-end">
              Prenota ora la tua esperienza, al pagamento ci pensi dopo!
            </p>

            <div className="mt-5 d-flex justify-content-end">
              <i className="bi bi-compass text-light fs-5 me-3"></i>
              <span className="text-light fs-5 fw-bold">
                {esperienza.localita}
              </span>
            </div>
            <p className="text-light d-flex justify-content-end fw-light mt-1">
              Scopri un posto mozzafiato: blocca la tua esperienza
            </p>

            <div className="mt-5 d-flex justify-content-end">
              <i className="bi bi-clock text-light fs-5 me-3"></i>
              <span className="fs-5 text-light fw-bold">
                {esperienza.durata}
              </span>
            </div>
            <p className="d-flex justify-content-end fw-light text-light mt-1">
              L'esperienza è su misura per te: verifica la disponibilità
            </p>

            <h2 className="text-center text-dark pb-2 pt-4">
              Descrizione dettagliata
            </h2>
            <hr className="text-light pb-3" />
            <p className="descrizione-estesa ps-3 pt-3 mb-5 pe-3 text-dark shadow-lg">
              {esperienza.descrizioneEstesa}
            </p>

            <div ref={recensioniRef}>
              <span className="text-dark fs-3 ps-3 fw-bold mt-4">
                Recensioni
              </span>
            </div>

            {recensioni.length === 0 ? (
              <p className="text-center text-muted">
                Nessuna recensione per questa esperienza.
              </p>
            ) : (
              <>
                {(mostraTutte ? recensioni : recensioni.slice(0, 3)).map(
                  (recensione) => (
                    <div
                      key={recensione.id}
                      className="recensione-box p-3 rounded"
                    >
                      <div className="d-flex">
                        <p className="mb-0 text-dark">{recensione.voto}</p>
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="bi bi-star-fill ms-2 text-warning"
                          ></i>
                        ))}
                      </div>
                      <div className="d-flex mt-2 pt-2">
                        <img
                          src="/terra1.jpg"
                          className="rounded-5 img-recensioni"
                          alt="autore"
                        />
                        <p className="fw-bold text-dark pb-2 mb-1 ms-2">
                          {recensione.autore}
                        </p>
                      </div>
                      <small>
                        {new Date(recensione.data).toLocaleDateString()}
                      </small>
                      <p className="mb-1 pt-2 text-dark fw-lighter shadow-sm">
                        {recensione.contenuto}
                      </p>
                    </div>
                  )
                )}

                <div className="text-center">
                  <button
                    onClick={() => setMostraTutte(!mostraTutte)}
                    className="esplora-btn shadow-lg fw-bold bg-transparent mt-5 mb-5 text-light border-0"
                  >
                    {mostraTutte ? "Mostra meno" : "Mostra tutte le recensioni"}
                  </button>
                </div>
              </>
            )}
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="d-flex justify-content-center mt-5 pt-5"
          >
            <div className="Mappa w-100 h-100 shadow">
              <MappaTest />
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="text-light mt-5" />
      <Footer />
    </div>
  );
};

export default EsperienzaDettaglio;
