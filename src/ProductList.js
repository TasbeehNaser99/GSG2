import React from 'react';
import './ProductList.css';

const ProductList = ({ products, activeFilter, onFilterChange }) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Books'];

  return (
    <div>
      {/* Filter Buttons */}
      <div className="filter-section">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
