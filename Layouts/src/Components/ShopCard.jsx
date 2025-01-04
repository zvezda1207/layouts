import React from 'react';

const ShopCard = ({ item }) => {
    return (
        <div className="shop-card">
            <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ShopCard;