/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bulma/css/bulma.min.css";
import { useState } from "react";
// import { BrowserRouter ,Route, Routes } from "react-router-dom";
import { FaHome, FaBookReader } from "react-icons/fa";
export default function BookMenu() {
  const [isActive, setisActive] = useState(false);
  return (
    <>
      <nav className="navbar is-link" style={{ backgroundColor: "#1C3E70" }}>
        <div className="container">
          <div className="navbar-brand">
            <a
              onClick={() => {
                setisActive(!isActive);
              }}
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              style={{
                overflow: "hidden",
                transition: "max-height 200ms ease-in-out",
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={`navbar-menu ${isActive ? "is-active" : ""}`}
          >
            <div className="navbar-end is-transparent is-fullHeight">
              <a className="navbar-item">
                <FaHome />
                <span>Add Bookshelf</span>
                {/* </Route> */}
              </a>
              <a href="/bookshelf" className="navbar-item">
                <FaBookReader />
                <span>Add Book</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
