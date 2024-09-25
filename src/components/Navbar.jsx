import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [slideMenu, setSlideMenu] = useState(false);

  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div>Prem</div>
          <div className="line">Soft. Engineer</div>
        </div>
        <label htmlFor="hamburgerMenu" onClick={() => setSlideMenu(!slideMenu)}>
          <i className="fa-solid fa-bars"></i>
        </label>

        <input type="checkbox" id="hamburgerMenu" />
        <div className={slideMenu ? "menu slide" : "menu"}>
          <ul
            className="flex navigation"
            onClick={() => setSlideMenu(!slideMenu)}
          >
            <li>
              {/* <a href="/">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <a href="skills">Skills</a> */}
              <Link to="skills">Skills</Link>
            </li>
            <li>
              {/* <a href="projects">Projects</a> */}
              <Link to="projects">Projects</Link>
            </li>
            <li>
              {/* <a href="about">About</a> */}
              <Link to="about">About</Link>
            </li>
            <li>
              {/* <a href="contact">Contact</a> */}
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
