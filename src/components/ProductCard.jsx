import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
        }}
      />
      <div className="product-details">
        <h4 className="product-brand">{product.brand}</h4>
        <h3 className="product-name">{product.name} - {product.flavor}</h3>
        <div className="rating">
          <span role="img" aria-label="star">⭐</span> {product.rating} ({product.reviews} reviews)
        </div>
        <div className="price-info">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          <span className="mrp">MRP: <del>₹{product.mrp.toLocaleString()}</del></span>
        </div>
        <span className="discount-badge">{product.discount}</span>
        
        <button
          className="order-button"
          onClick={() => alert(`Call us at +91 9637444422 to order ${product.name}!`)}
        >
          Call to Order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;