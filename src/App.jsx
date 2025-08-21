import React, { useState } from "react";

function App() {
  // Step 1: Initial product object
  const initialProduct = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    inStock: true,
  };

  // Step 2: State with initial product
  const [product, setProduct] = useState(initialProduct);

  // Function to update two properties (price and brand)
  const updateProduct = () => {
    setProduct({
      ...product,
      price: 60000, // update price
      brand: "HP",  // update brand
    });
  };

  // Function to reset product back to original state
  const resetProduct = () => {
    setProduct(initialProduct);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>In Stock:</strong> {product.inStock ? "Yes" : "No"}</p>

      <button onClick={updateProduct} style={{ padding: "10px", margin: "10px" }}>
        Update Product
      </button>

      <button onClick={resetProduct} style={{ padding: "10px", margin: "10px", background: "lightcoral", color: "white" }}>
        Reset Product
      </button>
    </div>
  );
}

export default App;
