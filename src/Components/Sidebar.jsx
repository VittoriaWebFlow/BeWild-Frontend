import React from "react";
import "../App.css";

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
          <a href="#">Forum</a>
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
