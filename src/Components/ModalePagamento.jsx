import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "../App.css";

const ModalePagamento = ({ show, onClose, onSubmit, totale }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    dataNascita: "",
    indirizzo: "",
    comune: "",
    provincia: "",
    cap: "",

    numeroCarta: "",
    scadenza: "",
    cvc: "",
    metodoPagamento: "visa",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valoriVuoti = Object.values(formData).some((val) => {
      if (val === null || val === undefined) return true;
      return String(val).trim() === "";
    });

    if (valoriVuoti) {
      alert("Per favore compila tutti i campi.");
      return;
    }
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      dialogClassName="modal-dialog-bottom"
    >
      <Modal.Header closeButton className="modal-title">
        <Modal.Title className="fw-bolder ">
          Inserisci i tuoi dati personali
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-pay">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="">
            <Form.Control
              name="nome"
              onChange={handleChange}
              required
              className="w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
              placeholder="Nome*"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="cognome"
              onChange={handleChange}
              required
              placeholder="Cognome*"
              className="mt-3 w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              type="date"
              name="dataNascita"
              onChange={handleChange}
              required
              className="w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="indirizzo"
              onChange={handleChange}
              required
              className="w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
              placeholder="Indirizzo"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="comune"
              onChange={handleChange}
              required
              className="w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
              placeholder="Comune di residenza"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="provincia"
              onChange={handleChange}
              required
              className="w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
              placeholder="Provincia"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Control
              name="cap"
              onChange={handleChange}
              required
              className="w-50 ms-auto  me-auto bg-transparent border-1 rounded-5"
              placeholder="CAP"
            />
          </Form.Group>
          <hr className="text-light border-3" />
          <div className="text-center my-4">
            <h5 className="fw-bold fs-4">Seleziona il metodo di pagamento</h5>
            <p className="text-success fw-medium">
              🔒 I pagamenti sono sicuri e criptati
            </p>
            <div className="d-flex justify-content-center gap-2 mb-3">
              <Form.Check
                type="radio"
                name="metodoPagamento"
                value="visa"
                inline
                defaultChecked
                onChange={handleChange}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                style={{ height: "20px" }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="Mastercard"
                style={{ height: "20px" }}
              />
            </div>
          </div>

          <Form.Group className="mb-2">
            <Form.Label className="d-flex justify-content-center text-light fw-bold">
              Numero Carta
            </Form.Label>
            <Form.Control
              name="numeroCarta"
              onChange={handleChange}
              required
              className="w-50 ms-auto me-auto bg-transparent border-1 rounded-5"
            />
          </Form.Group>
          <Form.Label className="d-flex justify-content-center fw-bold text-light">
            Scadenza
          </Form.Label>
          <Form.Group>
            <Form.Control
              name="scadenza"
              onChange={handleChange}
              placeholder="MM/AA"
              required
              className="d-flex justify-content-center text-light fw-bold w-50 ms-auto me-auto bg-transparent rounded-5"
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="d-flex justify-content-center text-light fw-bold">
              CVC
            </Form.Label>
            <Form.Control
              name="cvc"
              onChange={handleChange}
              required
              className="d-flex justify-content-center text-light fw-bold w-50 ms-auto me-auto bg-transparent rounded-5 mb-4"
            />
          </Form.Group>

          <Modal.Footer className="d-flex justify-content-center">
            <Button
              className="esplora-btn bg-transparent border-0 fw-bold"
              onClick={onClose}
            >
              Annulla
            </Button>
            <Button
              className="esplora-btn bg-transparent border-0 fw-bold"
              type="submit"
            >
              Conferma pagamento di €{" "}
              {isNaN(totale) ? "0.00" : totale.toFixed(2)}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalePagamento;
