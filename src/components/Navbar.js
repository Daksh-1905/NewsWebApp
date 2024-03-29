import React from "react";
import News from "./News";
import { useState } from "react";

const Navbar = (props) => {
  const [cCode, setcCode] = useState("in");
  const [news, setNews]=useState("India");

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>News2Day</b>
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {news}
                </a>
                <ul className={`dropdown-menu bg-${props.mode}`} aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("in"); //1
                        setNews("India");
                      }}
                    >
                      India
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("us"); //2
                        setNews("United States of America");
                      }}
                    >
                      United States of America
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("ae"); //3
                        setNews("United Arab Emirates");
                      }}
                    >
                      United Arab Emirates
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("au"); //4
                        setNews("Australia");
                      }}
                    >
                      Australia
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("ar"); //5
                        setNews("Argentina");
                      }}
                    >
                      Argentina
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("at"); //6
                        setNews("Austria");
                      }}
                    >
                      Austria
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("be"); //7
                        setNews("Belgium");
                      }}
                    >
                      Belgium
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("bg"); //8
                        setNews("Bulgeria");
                      }}
                    >
                      Bulgeria
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}    onClick={() => {
                        setcCode("br"); //9
                        setNews("Brazil");
                      }}
                    >
                      Brazil
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}   onClick={() => {
                        setcCode("ca"); //10
                        setNews("Canada");
                      }}
                    >
                      Canada
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}    onClick={() => {
                        setcCode("ch"); //11
                        setNews("Switzerland");
                      }}
                    >
                      Switzerland
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}     onClick={() => {
                        setcCode("cn"); //12
                        setNews("China");
                      }}
                    >
                      China
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}    onClick={() => {
                        setcCode("co"); //13
                        setNews("Colombia");
                      }}
                    >
                      Colombia
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}     onClick={() => {
                        setcCode("cu"); //14
                        setNews("Cuba");
                      }}
                    >
                      Cuba
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`} onClick={() => {
                        setcCode("cz"); //15
                        setNews("Czechia");
                      }}
                    >
                      Czechia
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}onClick={() => {
                        setcCode("de"); //16
                        setNews("Germany");
                      }}
                    >
                      Germany
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}  onClick={() => {
                        setcCode("eg"); //17
                        setNews("Egypt");
                      }}
                    >
                      Egypt
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}   onClick={() => {
                        setcCode("fr"); //18
                        setNews("France");
                      }}
                    >
                      France
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`} onClick={() => {
                        setcCode("gb"); //19
                        setNews("United Kingdom");
                      }}
                    >
                      United Kingdom
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("gr"); //20
                        setNews("Greece");
                      }}
                    >
                      Greece
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("hk"); //21
                        setNews("Hong Kong");
                      }}
                    >
                      Hong Kong
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("hu"); //22
                        setNews("Hungary");
                      }}
                    >
                      Hungary
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("id"); //23
                        setNews("Indonesia");
                      }}
                    >
                      Indonesia
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("ie"); //24
                        setNews("Ireland");
                      }}
                    >
                      Ireland
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("il"); //25
                        setNews("Israel");
                      }}
                    >
                      Israel
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("it"); //26
                        setNews("Italy");
                      }}
                    >
                      Italy
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("jp"); //27
                        setNews("Japan");
                      }}
                    >
                      Japan
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("ua"); //28
                        setNews("Ukraine");
                      }}
                    >
                      Ukraine
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("tr"); //29
                        setNews("Turkey");
                      }}
                    >
                      Turkey
                    </button>
                  </li>
                  <li>
                    <button
                      className={`dropdown-item text-${props.mode === 'light' ? 'dark':'light'}`}
                      onClick={() => {
                        setcCode("sg"); //29
                        setNews("Singapore");
                      }}
                    >
                      Singapore
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" style={{marginRight:"2rem"}}>
                Search
              </button>
            </form>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === "dark" ? 'Disable':'Enable'} Dark Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
      <div className="heading" style={{backgroundColor:`${props.mode === 'dark'?'gray':'lightgray'}`}}>
        <h3 className="heading-text">TODAY'S HIGHLIGHTS</h3>
      </div>
      {cCode === "in" && <News country={cCode} mode={props.mode} />}
      {cCode === "us" && <News country={cCode} mode={props.mode} />}
      {cCode === "ae" && <News country={cCode} mode={props.mode} />}
      {cCode === "ar" && <News country={cCode} mode={props.mode} />}
      {cCode === "at" && <News country={cCode} mode={props.mode} />}
      {cCode === "au" && <News country={cCode} mode={props.mode} />}
      {cCode === "be" && <News country={cCode} mode={props.mode} />}
      {cCode === "bg" && <News country={cCode} mode={props.mode} />}
      {cCode === "br" && <News country={cCode} mode={props.mode} />}
      {cCode === "ca" && <News country={cCode} mode={props.mode} />}
      {cCode === "ch" && <News country={cCode} mode={props.mode} />}
      {cCode === "cn" && <News country={cCode} mode={props.mode} />}
      {cCode === "co" && <News country={cCode} mode={props.mode} />}
      {cCode === "cu" && <News country={cCode} mode={props.mode} />}
      {cCode === "cz" && <News country={cCode} mode={props.mode} />}
      {cCode === "de" && <News country={cCode} mode={props.mode} />}
      {cCode === "eg" && <News country={cCode} mode={props.mode} />}
      {cCode === "fr" && <News country={cCode} mode={props.mode} />}
      {cCode === "gb" && <News country={cCode} mode={props.mode} />}
      {cCode === "gr" && <News country={cCode} mode={props.mode} />}
      {cCode === "hk" && <News country={cCode} mode={props.mode} />}
      {cCode === "hu" && <News country={cCode} mode={props.mode} />}
      {cCode === "id" && <News country={cCode} mode={props.mode} />}
      {cCode === "ie" && <News country={cCode} mode={props.mode} />}
      {cCode === "il" && <News country={cCode} mode={props.mode} />}
      {cCode === "it" && <News country={cCode} mode={props.mode} />}
      {cCode === "jp" && <News country={cCode} mode={props.mode} />}
      {cCode === "ua" && <News country={cCode} mode={props.mode} />}
      {cCode === "tr" && <News country={cCode} mode={props.mode} />}
      {cCode === "sg" && <News country={cCode} mode={props.mode} />}
    </>
  );
};

export default Navbar;
