// import React from 'react';
// import ShopItem from './ShopItem';

// const ListView = ({ items }) => {
//   return (
//     <ul className="list-view">
//       {items.map((product, index) => (
//         <ShopItem key={index} product={product} />
//       ))}
//     </ul>
//   );
// };

// export default ListView;

import React from 'react'; 

const ListView = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <img src={item.img} alt={item.name} width="50" /> {/* Изображение товара */}
                    {item.name} - ${item.price} {/* Название и цена товара */}
                </li>
            ))}
        </ul>
    );
};

export default ListView; 