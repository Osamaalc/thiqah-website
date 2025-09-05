// src/hooks/useHomeAnimations.js
import { useEffect, useRef } from 'react';
import {
    createBackgroundParticles,
    createHeroFloatingShapes,
    addTiltEffect,
    animateAboutText,
    initScrollAnimations,
    initParallaxEffect,
    cleanupAnimations
} from '../utils/animations';

/**
 * خطاف مخصص لإدارة الرسوم المتحركة في الصفحة الرئيسية
 */
export const useHomeAnimations = () => {
    const heroRef = useRef(null);
    const aboutImageRef = useRef(null);

    useEffect(() => {
        // إنشاء العناصر المتحركة
        createBackgroundParticles();
        createHeroFloatingShapes();
        addTiltEffect();
        animateAboutText();

        // تهيئة تأثير التمرير المتوازي
        const handleScroll = initParallaxEffect(heroRef);
        window.addEventListener('scroll', handleScroll);

        // تنظيف العناصر عند إلغاء تحميل المكون
        return () => {
            window.removeEventListener('scroll', handleScroll);
            cleanupAnimations();
        };
    }, []);

    return { heroRef, aboutImageRef };
};

/**
 * خطاف مخصص لإدارة رسوم التمرير المتحركة
 */
export const useScrollAnimations = () => {
    useEffect(() => {
        const observer = initScrollAnimations();

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        const staggeredGrids = document.querySelectorAll('.staggered-grid');

        animatedElements.forEach(el => observer.observe(el));
        staggeredGrids.forEach(grid => observer.observe(grid));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
            staggeredGrids.forEach(grid => observer.unobserve(grid));
        };
    }, []);
};

/**
 * خطاف مخصص لإدارة التمرير السلس
 */
export const useSmoothScroll = () => {
    const scrollToNext = () => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const scrollToSection = (sectionSelector, offset = 0) => {
        const element = document.querySelector(sectionSelector);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    return { scrollToNext, scrollToSection };
};