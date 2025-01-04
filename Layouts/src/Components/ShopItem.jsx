import React from 'react';

const ShopItem = ({ product }) => {
  return (
    <li className="shop-item">
      <img src={product.img} alt={product.name} />
      <span>{product.name}</span>
      <span>Price: ${product.price}</span>
      <span>Color: {product.color}</span>
    </li>
  );
};

export default ShopItem;