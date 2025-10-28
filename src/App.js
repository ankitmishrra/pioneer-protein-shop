import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import OfferBanner from './components/OfferBanner';

import { products } from './data/products';
import { testimonials } from './data/testimonials';
import { offers } from './data/offers';
import './App.css';

function App() {
  const phoneNumber = '+91 9637444422';

  return (
    <div className="home-page">
      <Header />
      <main>
        {/* 1. Hero/Banner Section */}
        <section className="hero-section">
          <h1>Fuel Your Fitness Journey with Pioneer Protein</h1>
          <p>Authentic Supplements. Best Prices. Direct from the Source.</p>
          <a href="#products" className="shop-now-button">Explore Products</a>
        </section>

        {/* 2. Offers Section */}
        <section id="offers" className="offers-section">
          <h2>🔥 Today's Hot Deals</h2>
          <div className="offer-banner-grid">
            {offers.map(offer => (
              <OfferBanner key={offer.id} offer={offer} />
            ))}
          </div>
        </section>

        {/* 3. Products Section (Main Listing) */}
        <section id="products" className="products-section">
          <h2>Top Selling Protein & Supplements</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 4. Testimonials Section */}
        <section id="testimonials" className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            {testimonials.map(t => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>

        {/* 5. CTA / Contact Section */}
        <section id="contact" className="contact-cta">
          <h2>Ready to Place Your Order?</h2>
          <p>Browse our products and call us directly to confirm your order.</p>
          <a href={`tel:${phoneNumber}`} className="main-cta-phone">
            📞 Call Now: {phoneNumber}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;