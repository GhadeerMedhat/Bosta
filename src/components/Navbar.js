import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="Navbar">
      <span className="nav-logo">bosta</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        <Link to="/prices">prices</Link>
        <Link to="/CallSales">Call Sales</Link>
        <Link to="/home"> </Link>
        <Link to="/TrickShipment">Trick shipment</Link>
        <Link to="/login">log in</Link>
        <Link to="/language">ENG</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </>
  );
};

export default Navbar;