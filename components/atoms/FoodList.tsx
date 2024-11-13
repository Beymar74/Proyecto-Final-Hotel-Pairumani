import React from 'react';
import './FoodList.css';
import FoodItem from '../molecules/FoodItem';

const foodData = [
    { src: 'url/to/image1.jpg', alt: 'Desayuno Americano', name: 'Desayuno Americano', stars: 5 },
    { src: 'url/to/image2.jpg', alt: 'Ensalada de langosta', name: 'Ensalada de langosta', stars: 5 },
    { src: 'url/to/image3.jpg', alt: 'Pique Macho', name: 'Pique Macho', stars: 5 },
    { src: 'url/to/image4.jpg', alt: 'Pampaku', name: 'Pampaku', stars: 5 },
];

const FoodList = () => {
    return (
        <section className="food-list">
            <h2>Platos Principales</h2>
            {foodData.map((food, index) => (
                <FoodItem
                    key={index}
                    src={food.src}
                    alt={food.alt}
                    name={food.name}
                    stars={food.stars}
                />
            ))}
        </section>
    );
};

export default FoodList;
