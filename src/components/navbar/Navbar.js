import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(true);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  const navButtonStyle = (isHovered, section) => ({
    color:
      isHovered || isActive === section
        ? "red"
        : props.mode === "light"
        ? "black"
        : "white",
    transition: "all 0.3s",
    borderBottom: isActive === section ? "1px solid red" : "none",
  });

  const buttonStyle = () => ({
    border: props.mode === "light" ? "1px solid black" : "1px solid red",
    width: "5%",
    height: "4vh",
    backgroundColor: isHovered ? "red" : `white`,
    cursor: "pointer",
    transition: "all 0.3s",
    borderRadius: "5px",
  });
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-dark bg-${props.mode}`}
        // style={{
        //   borderBottom:
        //     props.mode === "light" ? "1px solid black" : "1px solid red",
        // }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/NewsWebApp">
            <img
              src={logo}
              alt="..."
              style={{ width: "100%", height: "6vh" }}
            />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/NewsWebApp"
                  style={navButtonStyle(isHovered1, "Home")}
                  onMouseEnter={() => {
                    setIsHovered1(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered1(false);
                  }}
                  onClick={() => {
                    setIsActive("Home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/business"
                  style={navButtonStyle(isHovered2, "Business")}
                  onMouseEnter={() => {
                    setIsHovered2(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered2(false);
                  }}
                  onClick={() => {
                    setIsActive("Business");
                  }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  style={navButtonStyle(isHovered3, "Entertainment")}
                  onMouseEnter={() => {
                    setIsHovered3(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered3(false);
                  }}
                  onClick={() => {
                    setIsActive("Entertainment");
                  }}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/general"
                  style={navButtonStyle(isHovered4, "General")}
                  onMouseEnter={() => {
                    setIsHovered4(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered4(false);
                  }}
                  onClick={() => {
                    setIsActive("General");
                  }}
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/health"
                  style={navButtonStyle(isHovered5, "Health")}
                  onMouseEnter={() => {
                    setIsHovered5(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered5(false);
                  }}
                  onClick={() => {
                    setIsActive("Health");
                  }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/science"
                  style={navButtonStyle(isHovered6, "Science")}
                  onMouseEnter={() => {
                    setIsHovered6(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered6(false);
                  }}
                  onClick={() => {
                    setIsActive("Science");
                  }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sports"
                  style={navButtonStyle(isHovered7, "Sports")}
                  onMouseEnter={() => {
                    setIsHovered7(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered7(false);
                  }}
                  onClick={() => {
                    setIsActive("Sports");
                  }}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  style={navButtonStyle(isHovered8, "Technology")}
                  onMouseEnter={() => {
                    setIsHovered8(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered8(false);
                  }}
                  onClick={() => {
                    setIsActive("Technology");
                  }}
                >
                  Technology
                </Link>
              </li>
            </ul>
            <button
              style={buttonStyle()}
              onClick={props.toggleMode}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              {props.mode === "light" ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
