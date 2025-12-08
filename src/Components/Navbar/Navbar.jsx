import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg position-fixed ${style.navbar} p-4`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white fs-2 fw-bold" to={"/"}>
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  to={"/about"}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-white fw-bold"
                  to={"/portfolio"}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link text-white fw-bold"
                  to={"/contact"}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
