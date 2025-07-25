import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-custom d-none bg-transparent d-lg-block mt-4">
      <ul className="list-unstyled p-4">
        <li className="pb-3">
          <a href="#">Profilo</a>
        </li>
        <li className="pb-3">
          <a href="#"> Idee regalo</a>
        </li>
        <li className="pb-3">
          <a href="#"> Preferiti</a>
        </li>
        <li className="pb-3">
         <Link to="/forum">Forum</Link>
        </li>
        <li className="pb-3">
          <a href="#"> Offerte</a>
        </li>
        <li className="pb-3">
          <a href="#">Carrello</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
