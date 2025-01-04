import React from 'react';

const ListView = ({ items }) => {
    return (
        <div className="list-view-container">
            {items.map((item) => (
                <div key={item.name} className="list-item">
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: 'auto' }} />
                    <span>{item.name}</span>
                    <span className="price">${item.price} - Add to Cart</span>
                </div>
            ))}
        </div>
    );
};

export default ListView;