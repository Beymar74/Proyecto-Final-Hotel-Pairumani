import React from 'react';
import './Food.css';
import FoodList from './organisms/FoodList';

const Food = () => {
  return (
    
    <div style={{ padding: '0 24px' }}>
    <h1 className="plato">Platos Principales</h1>
    <FoodList />
</div>
  );
};

export default Food;
