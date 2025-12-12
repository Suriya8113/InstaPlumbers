"use client";
import "./Navbar.css";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1000">
          <img src="/Assets/logo1.svg" width={200} height={48.84} />
        </div>


        <ul className="nav-links">
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"><a href="#home">Home</a></li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150"><a href="#how-it-works">How It Works</a></li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"><a href="#services">Services</a></li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250"><a href="#faqs">FAQs</a></li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"><a href="#call">Contact</a></li>
        </ul>

        <div className="cta" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="350">
          <a href="#call" className="cta-btn">Contact Us</a>
        </div>

        <div className="hamburger" onClick={toggleMenu} data-aos="fade-in">
          {isOpen ? "" : <FiMenu size={32} />}
        </div>
      </div>


      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a onClick={toggleMenu} href="#home">Home</a></li>
          <li><a onClick={toggleMenu} href="#how-it-works">How It Works</a></li>
          <li><a onClick={toggleMenu} href="#services">Services</a></li>
          <li><a onClick={toggleMenu} href="#faqs">FAQs</a></li>
          <li><a onClick={toggleMenu} href="#contact">Contact</a></li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}



    </nav>
  );
};

export default Navbar;
