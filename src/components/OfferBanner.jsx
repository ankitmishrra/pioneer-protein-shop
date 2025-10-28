import React from 'react';

const OfferBanner = ({ offer }) => {
  const style = {
    backgroundColor: offer.bgColor,
    color: offer.textColor,
  };

  return (
    <div className="offer-banner" style={style}>
      <span className="offer-icon">{offer.icon}</span>
      <div className="offer-text">
        <h4 className="offer-title">{offer.title}</h4>
        <p className="offer-subtitle">{offer.subtitle}</p>
      </div>
    </div>
  );
};

