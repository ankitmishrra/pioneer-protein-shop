import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="testimonial-card">
      <p className="testimonial-text">" {testimonial.text} "</p>
      <div className="customer-info">
        <div className="customer-avatar-placeholder">
          {getInitials(testimonial.name)}
        </div> 
        <span className="customer-name">{testimonial.name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;