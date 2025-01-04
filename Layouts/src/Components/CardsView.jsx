import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ cards }) => {
    return (
        <div className="cards-container">
            {cards.map((item) => (
                <ShopCard key={item.name} item={item} />
            ))}
        </div>
    );
};

export default CardsView;