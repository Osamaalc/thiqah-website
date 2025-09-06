// src/pages/Home.js
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { images } from '../utils/assets';

// استيراد المكونات الفرعية
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ContactCTASection from '../components/home/ContactCTASection';

// استيراد الخطافات المخصصة
import {
    useHomeAnimations,
    useScrollAnimations,
    useSmoothScroll
} from '../hooks/useHomeAnimations';

// استيراد CSS
import '../styles/home.css';

const Home = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);

    // استخدام الخطافات المخصصة
    const { heroRef, aboutImageRef } = useHomeAnimations();
    useScrollAnimations();
    const { scrollToNext } = useSmoothScroll();

    // تأثير إظهار الصفحة
    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
            <HeroSection
                isVisible={isVisible}
                heroRef={heroRef}
                scrollToNext={scrollToNext}
            />

            <AboutSection
                aboutImageRef={aboutImageRef}
                images={images}
            />

            <ServicesSection />

            <FeaturesSection />

            <ContactCTASection />
        </div>
    );
};

export default Home;
