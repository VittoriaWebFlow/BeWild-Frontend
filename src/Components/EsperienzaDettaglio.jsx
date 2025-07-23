import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Modal, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../App.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import NavbarPages from "./NavbarPages";
import MappaTest from "./MappaTest";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrello } from "../context/CarrelloContext";

const EsperienzaDettaglio = ({ preferiti, setPreferiti, user }) => {
  const { id } = useParams();
  const [esperienza, setEsperienza] = useState(null);
  const [recensioni, setRecensioni] = useState([]);
  const recensioniRef = useRef(null);
  const [mostraTutte, setMostraTutte] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [ora, setOra] = useState("");
  const [partecipanti, setPartecipanti] = useState(1);
  const { aggiungiAlCarrello, carrello, rimuoviDalCarrello } = useCarrello();

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

  const handleAggiungiAlCarrello = () => {
    if (!user) {
      setShowPopup(true);
      return;
    }

    const nuovaPrenotazione = {
      id: esperienza.id,
      titolo: esperienza.titolo,
      prezzo: esperienza.prezzo,
      data,
      ora,
      partecipanti,
      immagine: esperienza.immagine,
      localita: esperienza.localita,
    };

    aggiungiAlCarrello(nuovaPrenotazione);
    navigate("/carrello");
  };

  return (
    <div>
      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Body className="bg-dark fs-4 text-center text-light">
          <h4 className="mb-4">Accesso necessario</h4>
          <h3 className="mb-4">
            Effettua l'accesso per aggiungere esperienze ai preferiti.
          </h3>
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
              <h3 className="text-dark fs-3 ps-3 fw-bold mt-4">Recensioni</h3>
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
                          src="/admin.webp"
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
            <div className="Mappa w-100 h-100">
              <MappaTest
                latitudine={esperienza.latitudine}
                longitudine={esperienza.longitudine}
                titolo={esperienza.titolo}
              />
              <p className="text-center fw-lighter mt-1">
                L'indirizzo esatto ti verrà inoltrato dopo la prenotazione
              </p>
              <h3 className="text-dark text-center mb-5 mt-5  fs-3 ps-3 fw-bold mt-4">
                Domande Frequenti
              </h3>
              <div>
                <h4>Come funziona in caso di maltempo?</h4>
                <h4>La cancellazione è gratuita?</h4>
              </div>
              <Card className="shadow-lg card-pay border-0 rounded-0 mt-4 w-50 text-center ms-auto me-auto pt-5 pb-5 px-5 mt-5">
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bolder text-light">PRENOTA</span>

                  <span className="fw-bolder text-light">REGALA</span>
                </div>

                <Form.Group className="mb-3 ">
                  <Form.Label className="text-light fw-bolder mt-3">
                    Data
                  </Form.Label>
                  <Form.Control
                    className="bg-transparent text-light border-1 rounded-0 mt-2"
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-light fw-bolder mt-3">
                    Ora
                  </Form.Label>
                  <Form.Control
                    className="bg-transparent text-light border-1 mt-2"
                    type="time"
                    value={ora}
                    onChange={(e) => setOra(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3 mt-3">
                  <Form.Label className="mt-3 text-light fw-bolder">
                    Partecipanti
                  </Form.Label>
                  <div className="mt-2">
                    <Button
                      className="rounded-5"
                      variant="outline-light "
                      onClick={() =>
                        setPartecipanti((prev) => Math.max(1, prev - 1))
                      }
                    >
                      -
                    </Button>
                    <span className="mx-3">{partecipanti}</span>
                    <Button
                      className="rounded-5"
                      variant="outline-light"
                      onClick={() => setPartecipanti((prev) => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-center mt-3 mb-2">
                  <strong className="fs-3 text-light ">
                    € {esperienza.prezzo * partecipanti}
                  </strong>
                </div>
                <div>
                  {" "}
                  <Button
                    className="esplora-btn w-100 bg-transparent fw-bold mt-3 border-0"
                    onClick={handleAggiungiAlCarrello}
                  >
                    Aggiungi al carrello
                  </Button>
                </div>
              </Card>
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
