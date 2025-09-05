// src/components/home/ServicesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/homeData';

const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;

    return (
        <div className="service-card staggered-item">
            <div className={`service-icon ${service.iconClass}`}>
                <IconComponent />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">
                {service.description}
            </p>
            <Link to={service.link || "/services"} className="service-link">
                <span>المزيد</span>
                <span className="link-arrow"></span>
            </Link>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="section-tag">ما نقدمه</div>
                    <h2 className="section-title">خدماتنا</h2>
                    <div className="section-underline"></div>
                    <p className="section-description">
                        نقدم مجموعة متنوعة من الخدمات التعليمية والأكاديمية المتخصصة
                    </p>
                </div>

                <div className="services-grid staggered-grid">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="services-cta animate-on-scroll">
                    <Link to="/services" className="primary-button">
                        <span className="button-text">عرض جميع الخدمات</span>
                        <span className="button-shine"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;