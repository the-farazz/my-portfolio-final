import  { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contactBtn from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="leftNav">
          <img src={logo} alt="" />
        </div>

        <div className="midNav">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="midNavContent"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-0.5}
            duration={500}
            className="midNavContent"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-0.5}
            duration={500}
            className="midNavContent"
          >
            Projects
          </Link>
         
          {/* <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Clients</a> */}
        </div>
        <div className="rightNav">
          <button
            onClick={() => {
              document
                .getElementById("contactPage")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={contactBtn} alt="" />
            contact me
          </button>
        </div>
        <div className="mobMenu">
          <img
            src={menu}
            alt="menu"
            className="mobMenu"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>

        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none " }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobContent"
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-0.5}
            duration={500}
            className="mobContent"
            onClick={() => setShowMenu(!showMenu)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-0.5}
            duration={500}
            className="mobContent"
            onClick={() => setShowMenu(!showMenu)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mobContent"
            onClick={() => setShowMenu(!showMenu)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
