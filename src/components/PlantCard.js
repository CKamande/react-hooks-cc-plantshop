import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={() => setInStock(!inStock)}>
        {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;
