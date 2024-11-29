import React from 'react';
import ChefProfileCard from './ChefProfileCard';
import './ChefSection.css';
import Head2 from "@/components/Head2";

const ChefSection = () => (
  <section className="chef-section">
    <Head2/>
    <h1 className="section-title">El Chef</h1>
    <ChefProfileCard />
  </section>
);

export default ChefSection;
