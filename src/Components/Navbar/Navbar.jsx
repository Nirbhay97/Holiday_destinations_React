import React, { useState } from "react";
import "./navbar.css";
import { FaKiwiBird } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const Navbar = () => {
  const [active, setActive] = useState("navbar navBar");

  const showNav = () => {
    setActive("navbar navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navbar navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <FaKiwiBird className="icon" /> 
            </h1>
            <span className="heading-format">Bird Events</span>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Holidays
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                 Post
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Join the Community
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Login
              </a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TfiLayoutGrid3Alt className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
