import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>ORU</h1>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#">Bosh Sahifa</a></li>
          <li><a href="#projects">Loyihalar</a></li>
          <li><a href="#services">Xizmatlar</a></li>
          <li><a href="#faq">Aloqa</a></li>
          <li><a href="#faq" className="partner-btn">Book</a></li>
          <li>+998-94-464-38-08</li>
          
        </ul>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1>ORU DIGITAL TECHNOLOGIES</h1>
        <li><a href="#faq" className="registration-btn">Buyurtma berish</a></li>
        <p className="date-info">
        Sizning Onlayn Muvaffaqiyatingiz Uchun Ajoyib Web-Saytlar!!
        </p>
      </header>

      {/* Clients and Finished Projects Summary */}
      <div className="summary-section">
        <div className="summary-box">
          <h2>20+</h2>
          <p>Clients</p>
        </div>
        <div className="summary-box">
          <h2>100+</h2>
          <p>Finished Projects</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
