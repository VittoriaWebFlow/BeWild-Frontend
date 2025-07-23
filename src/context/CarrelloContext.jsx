import { createContext, useContext, useState } from "react";

const CarrelloContext = createContext();
export const CarrelloProvider = ({ children }) => {
  const [carrello, setCarrello] = useState([]);

  const aggiungiAlCarrello = (item) => {
    setCarrello((prev) => [...prev, item]);
  };

  const rimuoviDalCarrello = (id) => {
    setCarrello((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CarrelloContext.Provider
      value={{ carrello, aggiungiAlCarrello, rimuoviDalCarrello }}
    >
      {children}
    </CarrelloContext.Provider>
  );
};

export const useCarrello = () => useContext(CarrelloContext);
