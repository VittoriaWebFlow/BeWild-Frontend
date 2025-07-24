import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "vittoria98@gmail.com" && password === "1234567") {
      const fakeUser = {
        name: "Vittoria Sacchi",
      };
      setUser(fakeUser);
      navigate("/homepage");
    } else {
      alert("Email o password sbagliata 😕");
    }
  };

  return (
    <div className="d-flex justify-content-center bg-dark align-items-center vh-100">
      <form
        onSubmit={handleLogin}
        className=" p-5  rounded-0 shadow-lg log-card"
        style={{ width: "370px", height: "520px" }}
      >
        <div className="d-flex justify-content-center ">
          <img src="./BeWildlogo.png" className="logo-navbar"></img>
        </div>
        <div className="d-flex justify-content-center">
          <h5 className="text-light log-title fw-lighter pb-3">
            Inizia il tuo viaggio
          </h5>
        </div>
        <div className="pb-4">
          <input
            type="email"
            placeholder="Email"
            className="form-control rounded-5 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="form-control rounded-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="#" className=" text-light text-decoration-none ">
          Password dimenticata?
        </a>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <button
            type="submit"
            className="btn btn-transparent text-light fw-bold esplora-btn rounded-5 mb-3 w-50 mt-3"
          >
            ACCEDI
          </button>
        </div>
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
