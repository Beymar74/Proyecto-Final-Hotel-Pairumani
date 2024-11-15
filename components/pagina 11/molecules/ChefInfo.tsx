import React from 'react';
import ChefName from '../atoms/ChefName';
import ChefTitle from '../atoms/ChefTitle';
import RatingStars from '../atoms/RatingStars';
import './ChefInfo.css';

type ChefInfoProps = {
  name: string;
  title: string;
};

const ChefInfo: React.FC<ChefInfoProps> = ({ name, title }) => (
  <div className="chef-info">
    <ChefName name={name} />
    <ChefTitle title={title} />
    <RatingStars />
  </div>
);

export default ChefInfo;
