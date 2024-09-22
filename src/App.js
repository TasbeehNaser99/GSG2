import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  // Product Data Array
  const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "T-Shirt", category: "Clothing", price: 20 },
    { name: "Jeans", category: "Clothing", price: 40 },
    { name: "Book - JavaScript Guide", category: "Books", price: 15 },
    { name: "Book - CSS Mastery", category: "Books", price: 25 }
  ];

  // State for Active Filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to Handle Filter Change
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  // Function to Get Filtered Products Based on Active Filter
  const getFilteredProducts = () => {
    if (activeFilter === 'All') {
      return products;
    }
    return products.filter(product => product.category === activeFilter);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      {/* Pass Props to ProductList Component */}
      <ProductList
        products={getFilteredProducts()}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;

