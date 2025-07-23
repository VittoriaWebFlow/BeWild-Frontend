import { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCarrello } from "../context/CarrelloContext";
import NavbarPages from "./NavbarPages";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
const Carrello = () => {
  const { carrello, rimuoviDalCarrello } = useCarrello();
  const navigate = useNavigate();

  const vaiAlPagamento = (item) => {
    navigate("/pagamento", { state: { esperienza: item } });
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
            <Row>
              {carrello.map((item, index) => (
                <Col key={index} md={6} lg={4} className="mb-4">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>{item.titolo}</Card.Title>
                      <Card.Text>Data: {item.data}</Card.Text>
                      <Card.Text>Ora: {item.ora}</Card.Text>
                      <Card.Text>Partecipanti: {item.partecipanti}</Card.Text>
                      <Card.Text>
                        Totale: € {item.prezzo * item.partecipanti}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="danger"
                          onClick={() => rimuoviDalCarrello(item.id)}
                        >
                          Rimuovi
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => vaiAlPagamento(item)}
                        >
                          Procedi al pagamento
                        </Button>
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
      <hr className="text-light" />
      <Footer />
    </div>
  );
};

export default Carrello;
