import React from 'react';

const Footer = () => {
  const phoneNumber = '+91 9637444422';
  const email = 'orders@pioneerprotein.com';

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Pioneer Protein Shop</h3>
          <p>Authentic Supplements, Guaranteed.</p>
          <p>📞 Order Now: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
          <p>📧 Support: <a href={`mailto:${email}`}>{email}</a></p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#products">All Products</a></li>
            <li><a href="#offers">Current Offers</a></li>
            <li><a href="#testimonials">Customer Reviews</a></li>
          </ul>
        </div>

        <div className="footer-section disclaimer">
          <h3>Important</h3>
          <p>
            This is a static display site. All orders are processed via phone.
            Products are subject to availability.
          </p>
          <p>&copy; {new Date().getFullYear()} Pioneer Protein Shop.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;