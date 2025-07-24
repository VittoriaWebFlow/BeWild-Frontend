import { useContext, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrello } from "../context/CarrelloContext";
import NavbarPages from "./NavbarPages";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ModalePagamenti from "./ModalePagamento";

const Carrello = () => {
  const { carrello, rimuoviDalCarrello } = useCarrello();
  const navigate = useNavigate();
  const [mostraModalePagamenti, setMostraModalePagamento] = useState(false);
  const [totalePagamento, setTotalePagamento] = useState(0);

  const vaiAlPagamento = (item) => {
    setTotalePagamento(item * item.partecipanti);
    setMostraModalePagamento(true);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarPages />
      <Sidebar />

      <main className="flex-grow-1">
        <Container className="content-wrapper">
          <h3 className="text-light text-center">CARRELLO</h3>
          <hr className="text-light border-5 w-75 ms-auto me-auto mb-5" />

          {carrello.length === 0 ? (
            <p className="text-center center-words fs-1 fw-bolder text-light">
              Nessuna attività nel carrello
            </p>
          ) : (
            <Row className="gx-md-5 gy-4">
              {carrello.map((item, index) => (
                <Col key={index} className="mb-4 ">
                  <Card className="card-shop shadow-lg w-100">
                    <Card.Body className="">
                      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <img
                          src={item.immagine}
                          alt={item.titolo}
                          className="mb-3 mb-md-0"
                          style={{
                            width: "100%",
                            maxWidth: "380px",
                            height: "220px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />

                        <div className="ms-md-4 mt-3 mt-md-0 flex-grow-1">
                          <h3 className="fw-light title-shop ms-3 mt-5">
                            {item.titolo}
                          </h3>
                          <div className="mb-3 ms-3 mt-3">
                            <i className="bi bi-star-fill text-warning ms-1"></i>
                            <i className="bi bi-star-fill text-warning ms-1"></i>
                            <i className="bi bi-star-fill text-warning ms-1"></i>
                            <i className="bi bi-star-fill text-warning ms-1"></i>
                            <i className="bi bi-star-fill text-warning ms-1"></i>
                          </div>
                          <div className="d-flex justify-content-around">
                            <div className="text-center small mt-0">
                              <i className="bi bi-calendar-date me-1" />{" "}
                              {item.data}
                            </div>
                            <div className="text-center small mt-0">
                              <i className="bi bi-clock me-1" /> {item.ora}
                            </div>
                            <div className="text-center small mt-0">
                              <i className="bi bi-people-fill me-1" />{" "}
                              {item.partecipanti}
                            </div>
                            <div className="text-center small mt-0">
                              <i className="i bi-cart-check me-1" />
                              {item.prezzo * item.partecipanti}
                            </div>
                          </div>
                          <div className="d-flex justify-content-around mt-3">
                            <Button
                              variant="danger"
                              className="esplora-btn bg-transparent border-0 fw-bold"
                              onClick={() => rimuoviDalCarrello(item.id)}
                            >
                              Rimuovi
                            </Button>
                            <Button
                              variant="success"
                              className="esplora-btn bg-transparent border-0 fw-bold"
                              onClick={() => vaiAlPagamento(item)}
                            >
                              Procedi al pagamento
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
      <ModalePagamenti
        show={mostraModalePagamenti}
        onClose={() => setMostraModalePagamento(false)}
        onSubmit={(formData) => {
          console.log("Dati ricevuti per l'invio della e-mail:", formData);
          alert("Pagamento effettuato. Riceverai un' e-mail di conferma");
        }}
        totale={totalePagamento}
      />

      <hr className="text-light" />
      <Footer />
    </div>
  );
};

export default Carrello;
