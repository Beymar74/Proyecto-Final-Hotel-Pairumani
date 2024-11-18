import React from 'react';
import FoodItem from '../molecules/FoodItem';

const foodData = [
    
    { src: '/images/image1.jpg', alt: 'Desayuno Americano', name: 'Desayuno Americano', stars: 5,id:"1" },
    { src: '/images/image2.jpg', alt: 'Ensalada de langosta', name: 'Ensalada de langosta', stars: 4 ,id:"16"},
    { src: '/images/image3.jpg', alt: 'Pique Macho', name: 'Pique Macho', stars: 4 ,id:"6"},
    { src: '/images/image4.jpg', alt: 'Pampaku', name: 'Pampaku', stars: 5 ,id:"7"},
];

const FoodList = () => {
    return (
        <section className="food-list">
            <h2></h2>
            {foodData.map((food, index) => (
                <FoodItem
                    key={index}
                    src={food.src}
                    alt={food.alt}
                    name={food.name}
                    stars={food.stars}
                    id={food.id} 
                />
            ))}
        </section>
    );
};

export default FoodList;