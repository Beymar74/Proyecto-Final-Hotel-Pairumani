import React from 'react';
import Image from 'next/image';
import './FoodItem.css';
import Link from 'next/link';

interface FoodItemProps {
    src: string;
    alt: string;
    name: string;
    stars: number;
    id: string; 
}

const FoodItem: React.FC<FoodItemProps> = ({ src, alt, name, stars,id }) => {
    return (
        <>
        <Link href={`/platillos/${id}`}>
        
        <div className="food-item">
            <div className="food-info">
                <h3 className="food-name">{name}</h3>
                <div className="rating">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</div>
            </div>
            <Image src={src} alt={alt} width={100} height={80} className="food-image" />
        </div>
        </Link>
        </>
    );
};

export default FoodItem;