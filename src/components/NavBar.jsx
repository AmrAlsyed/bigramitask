import logo from "../assets/main-logo.svg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/nav.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navBg, setnavBg] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setnavBg(true);
    } else {
      setnavBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <div className="css-dikkg9">
      <div className={navBg ? "header header-bg" : "header"}>
        <a href={"/"}>
          <img src={logo} />
        </a>
      </div>
      <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href={"/"}>Home</a>
          </li>
          <li>
            <a href={"/project"}>News</a>
          </li>
          <li>
            <a href={"/about"}>Courses</a>
          </li>
          <li>
            <a href={"/contact"}>E-books</a>
          </li>
          <li>
            <a href={"/contact"}>Contact Us</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
