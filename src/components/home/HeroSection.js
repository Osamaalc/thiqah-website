// src/components/home/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa';

const HeroSection = ({ isVisible, heroRef, scrollToNext }) => {
    return (
        <section className={`hero-section ${isVisible ? 'visible' : ''}`} ref={heroRef}>
            <div className="hero-particles"></div>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="reveal-text">منصة</span>
                    <span className="highlight reveal-text">ثقة</span>
                    <span className="reveal-text">التعليمية</span>
                </h1>
                <p className="hero-subtitle reveal-text">
                    حلول تعليمية متكاملة باحترافية عالية
                </p>
                <div className="hero-buttons">
                    <Link to="/contact" className="primary-button reveal-item">
                        <span className="button-text">تواصل معنا</span>
                        <span className="button-shine"></span>
                    </Link>
                    <Link to="/services" className="secondary-button reveal-item">
                        <span className="button-text">خدماتنا</span>
                        <span className="icon-container">
                            <FaArrowLeft />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="scroll-indicator" onClick={scrollToNext}>
                <span>اكتشف المزيد</span>
                <FaChevronDown className="bounce" />
            </div>

            <div className="hero-shape"></div>
        </section>
    );
};

export default HeroSection;