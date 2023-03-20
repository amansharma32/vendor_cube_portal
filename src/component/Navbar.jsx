import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ph from "../images/favicon1.png";
import { NavLink, Route } from "react-router-dom";

import pv from "../images/pv.png";
import "../App.css";
import Win from "./Win";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{
          background: "rgb(8,96,128)",
          color: "white",
        }}
      >
        <a className="navbar-brand" href="#">
          <img
            src={ph}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  ">
              <NavLink to="/logIn" className="nav-link text-white">
                Login
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link text-white" to="/registration">
                Registration
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link text-white" to="/dashboard">
                Vendor Portal
              </NavLink>
            </li>
            <a className="navbar-brand2 " href="#">
              <img className="img2" src={pv} width="40" height="40" alt="" />
              <div class="form-group"></div>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
