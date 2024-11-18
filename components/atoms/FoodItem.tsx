import React from 'react';
import './FoodItem.css';
import FoodImage from '../atoms/FoodImage';
import FoodName from '../atoms/FoodName';
import Rating from '../atoms/Rating';

interface FoodItemProps {
    src: string;
    alt: string;
    name: string;
    stars: number;
}

const FoodItem: React.FC<FoodItemProps> = ({ src, alt, name, stars }) => {
    return (
        <div className="food-item">
            <FoodImage src={src} alt={alt} />
            <div className="food-info">
                <FoodName name={name} />
                <Rating stars={stars} />
            </div>
        </div>
    );
};

export default FoodItem;