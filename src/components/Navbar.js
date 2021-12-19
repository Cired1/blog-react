import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <nav className="navbar">
      
      <button onClick={openModal} className="btn-menu">
        <FaBars className="menu-icon" />
      </button>

      <Modal isOpen={isOpen}>
        <ul className="list">
          <li>
            <Link to="/" onClick={closeModal}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" onClick={closeModal}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="contact" onClick={closeModal}>
              CONTACT
            </Link>
          </li>
        </ul>
      </Modal>


      <ul className="list">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="about">ABOUT</Link>
        </li>
        <li>
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
