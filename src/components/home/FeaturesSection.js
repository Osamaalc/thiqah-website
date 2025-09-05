// src/components/home/FeaturesSection.js
import React from 'react';
import { featuresData } from '../../data/homeData';

const FeatureCard = ({ feature }) => {
    return (
        <div className="feature-card staggered-item">
            <div className="feature-icon">
                <div className={`feature-icon-bg ${feature.bgClass}`}></div>
                <span>{feature.id}</span>
            </div>
            <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="section-tag">لماذا تختارنا</div>
                    <h2 className="section-title">ما يميزنا</h2>
                    <div className="section-underline"></div>
                </div>

                <div className="features-grid staggered-grid">
                    {featuresData.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;