import React, { useState } from 'react'; 
import IconSwitch from './IconSwitch'; 
import ListView from './ListView'; 
import CardsView from './CardsView'; 

const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const Store = () => {
    const [isListView, setIsListView] = useState(false);

    const onSwitch = () => {
        setIsListView(!isListView);
    };

    return (
        <div>
            <h2>Магазин отображается!</h2>
            <IconSwitch icon={isListView ? "view_list" : "view_module"} onSwitch={onSwitch} />
            {isListView ? <ListView items={products} /> : <CardsView cards={products} />}
        </div>
    );
}

export default Store;