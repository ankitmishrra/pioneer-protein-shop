import React from 'react';
import logo from '../assets/pioneer-logo.png'; 

const Header = () => {
  const phoneNumber = '+91 9637444422'; 

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Pioneer Protein Shop" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="#products">Products</a>
        <a href="#offers">Offers</a>
        <a href="#testimonials">Testimonials</a>
        <a href={`tel:${phoneNumber}`} className="nav-cta">Call to Order</a>
      </nav>
      <div className="order-cta">
        <p>
          <span className="cta-label">Order by Phone:</span>
          <a href={`tel:${phoneNumber}`} className="phone-number">{phoneNumber}</a>
        </p>
      </div>
    </header>
  );
};

export default Header;