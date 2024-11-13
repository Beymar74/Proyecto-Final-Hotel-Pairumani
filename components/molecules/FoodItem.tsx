import React from 'react';
import Image from 'next/image';
import './FoodItem.css';

interface FoodItemProps {
    src: string;
    alt: string;
    name: string;
    stars: number;
}

const FoodItem: React.FC<FoodItemProps> = ({ src, alt, name, stars }) => {
    return (
        <div className="food-item">
            <div className="food-info">
                <h3 className="food-name">{name}</h3>
                <div className="rating">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
            </div>
            <Image src={src} alt={alt} width={100} height={80} className="food-image" />
        </div>
    );
};

export default FoodItem;
