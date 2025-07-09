import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LoginPage = ({ setUser }) => {
  // 🔐 1. Creo due stati per email e password (sono come "caselle vuote")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👉 serve per cambiare pagina

  // ✅ 2. Questa funzione parte quando clicchi su "Accedi"
  const handleLogin = (e) => {
    e.preventDefault(); // 🛑 evita il refresh della pagina

    // 🧠 3. Qui controllo se le credenziali sono giuste (finta verifica)
    if (email === "vittoria98@gmail.com" && password === "1234") {
      // 👤 4. Salvo i dati dell'utente
      const fakeUser = {
        name: "Eros Massa",
        photo: "https://via.placeholder.com/100", // 📸 immagine di esempio
      };
      setUser(fakeUser); // ✅ lo salvo nello stato globale
      navigate("/homepage"); // 🚀 vado alla Homepage
    } else {
      alert("Email o password sbagliata 😕");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleLogin}
        className=" p-5 rounded-0 shadow"
        style={{ width: "370px", height: "520px" }}
      >
        <div className="d-flex justify-content-center">
          <img src="./BeWildlogo.png" className="logo-navbar"></img>
        </div>
        <h5 className="text-light fw-light pb-3 d-flex justify-content-center">
          Accedi per iniziare il tuo viaggio!
        </h5>
        <div className="pb-4">
          <input
            type="email"
            placeholder="Email"
            className="form-control rounded-5 "
            value={email}
            onChange={(e) => setEmail(e.target.value)} // ✍️ aggiorno lo stato
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="form-control rounded-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // ✍️ aggiorno lo stato
            required
          />
        </div>
        <a href="#" className=" text-light text-decoration-none ">
          Password dimenticata?
        </a>

        <button
          type="submit"
          className="btn btn-dark rounded-5 mb-3 w-100 mt-3"
        >
          Accedi
        </button>
        <h5>
          Oppure{" "}
          <a href="#" className="text-light">
            Registrati
          </a>
        </h5>
      </form>
    </div>
  );
};

export default LoginPage;
