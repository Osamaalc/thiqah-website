
// src/pages/Home.js
import React, { useEffect, useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    FaGraduationCap, FaUserGraduate, FaHeartbeat,
    FaLaptopCode, FaLanguage, FaArrowLeft,
    FaWhatsapp, FaTelegram, FaChevronDown, FaRobot
} from 'react-icons/fa';
import { images } from '../utils/assets';
import '../styles/home.css';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    // Get dark mode state from context
    const { isDarkMode } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
    const aboutImageRef = useRef(null);

    // Animation effect for hero section
    useEffect(() => {
        setIsVisible(true);

        // Parallax scroll effect for hero section
        const handleScroll = () => {
            if (heroRef.current) {
                const scrollPosition = window.scrollY;
                const heroElement = heroRef.current;
                const opacity = Math.max(0, Math.min(1, 1 - scrollPosition / 700));
                heroElement.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                heroElement.querySelector('.hero-content').style.opacity = opacity;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Create background particles
        createBackgroundParticles();

        // Create floating shapes for hero section
        createHeroFloatingShapes();

        // Add 3D tilt effect to about image
        addTiltEffect();

        // Animate about text on scroll
        animateAboutText();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Clean up any animation elements when component unmounts
            const particles = document.querySelector('.bg-particles');
            if (particles) particles.remove();

            const floatingShapes = document.querySelector('.hero-floating-shapes');
            if (floatingShapes) floatingShapes.remove();

            const animatedGradient = document.querySelector('.hero-animated-gradient');
            if (animatedGradient) animatedGradient.remove();
        };
    }, []);

    // Animation effect on scroll
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');

                    // Add staggered animation for grid items
                    if (entry.target.classList.contains('staggered-grid')) {
                        const items = entry.target.querySelectorAll('.staggered-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('item-visible');
                            }, 150 * index);
                        });
                    }
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        // Observe staggered grids
        const staggeredGrids = document.querySelectorAll('.staggered-grid');
        staggeredGrids.forEach(grid => observer.observe(grid));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
            staggeredGrids.forEach(grid => observer.unobserve(grid));
        };
    }, []);

    const scrollToNext = () => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Create background particles function
    const createBackgroundParticles = () => {
        const container = document.createElement('div');
        container.className = 'bg-particles';
        document.body.appendChild(container);

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random size between 3px and 12px
            const size = Math.floor(Math.random() * 10) + 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Random opacity
            particle.style.setProperty('--particle-opacity', `${Math.random() * 0.2 + 0.1}`);

            // Random animation duration
            particle.style.setProperty('--float-time', `${Math.random() * 15 + 10}s`);

            // Random movement paths
            particle.style.setProperty('--x1', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y1', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--x2', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y2', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--x3', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y3', `${Math.random() * 200 - 100}px`);

            container.appendChild(particle);
        }
    };

    // Create floating shapes for hero section
    const createHeroFloatingShapes = () => {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        const shapesContainer = document.createElement('div');
        shapesContainer.className = 'hero-floating-shapes';
        heroSection.appendChild(shapesContainer);

        // Add animated gradient background
        const animatedGradient = document.createElement('div');
        animatedGradient.className = 'hero-animated-gradient';
        heroSection.insertBefore(animatedGradient, heroSection.firstChild);

        for (let i = 0; i < 6; i++) {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';

            // Random size between 50px and 200px
            const size = Math.floor(Math.random() * 150) + 50;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;

            // Random position
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;

            // Random opacity
            shape.style.setProperty('--shape-opacity', `${Math.random() * 0.2 + 0.05}`);

            // Random animation duration
            shape.style.setProperty('--floating-time', `${Math.random() * 15 + 15}s`);

            // Random movement paths
            shape.style.setProperty('--floating-x1', `${Math.random() * 100 - 50}px`);
            shape.style.setProperty('--floating-y1', `${Math.random() * 100 - 50}px`);
            shape.style.setProperty('--floating-x2', `${Math.random() * 100 - 50}px`);
            shape.style.setProperty('--floating-y2', `${Math.random() * 100 - 50}px`);
            shape.style.setProperty('--floating-x3', `${Math.random() * 100 - 50}px`);
            shape.style.setProperty('--floating-y3', `${Math.random() * 100 - 50}px`);

            shapesContainer.appendChild(shape);
        }
    };

    // Add 3D tilt effect to about image
    const addTiltEffect = () => {
        const imageContainer = document.querySelector('.image-placeholder');
        if (!imageContainer) return;

        imageContainer.addEventListener('mousemove', (e) => {
            const rect = imageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation based on mouse position
            // Limit rotation to small amount for subtle effect
            const rotateX = (y - centerY) / centerY * 5; // Max 5 degrees
            const rotateY = (centerX - x) / centerX * 5; // Max 5 degrees

            imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        imageContainer.addEventListener('mouseleave', () => {
            imageContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    };

    // Animate about text on scroll
    const animateAboutText = () => {
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (!aboutParagraphs.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation to paragraphs
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 200);
                }
            });
        }, { threshold: 0.3 });

        aboutParagraphs.forEach(p => observer.observe(p));
    };

    return (
        <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Main Welcome Section */}
            <section className={`hero-section ${isVisible ? 'visible' : ''}`} ref={heroRef}>
                <div className="hero-particles"></div>
                <div className="hero-overlay"></div>
                {/* يمكن إضافة خلفية فيديو هنا */}
                {/*<video className="hero-video-background" autoPlay muted loop>
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>*/}
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="reveal-text">منصة</span>
                        <span className="highlight reveal-text">ثقة</span>
                        <span className="reveal-text">التعليمية</span>
                    </h1>
                    <p className="hero-subtitle reveal-text">حلول تعليمية متكاملة باحترافية عالية</p>
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

            {/* About Section */}
            <section className="about-section container">
                <div className="section-header animate-on-scroll">
                    <div className="section-tag">عن المنصة</div>
                    <h2 className="section-title">من نحن</h2>
                    <div className="section-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text animate-on-scroll">
                        <p className="animate-p">
                            منصة ثقة هي منصة تعليمية أكاديمية متخصصة في تقديم حلول تعليمية متكاملة باحترافية عالية، تدعم الطالب في جميع
                            المراحل الدراسية والتخصصات من خلال فريق مؤهل من المعلمين والباحثين ذوي الخبرة والدرجات العلمية المتقدمة.
                            نواكب التطور التقني بتقديم حلول الذكاء الاصطناعي المبتكرة لخدمة التعليم والبحث العلمي.
                        </p>
                        <p className="animate-p">
                            نتميز بالدقة والجودة والالتزام بالمعايير الأكاديمية مع ضمان السرية والموثوقية في جميع الخدمات. في منصة ثقة، نؤمن بأن لكل
                            طالب طموح الحق في الحصول على دعم تعليمي موثوق، لذلك نسعى لتبسيط العملية التعليمية وتعزيز فرص التفوق والنجاح.
                        </p>
                        <Link to="/about" className="text-button">
                            اقرأ المزيد
                            <span className="icon-container">
                                <FaArrowLeft />
                            </span>
                        </Link>
                    </div>

                    <div className="about-image animate-on-scroll" ref={aboutImageRef}>
                        <div className="image-container">
                            <div className="decorative-circle circle-1"></div>
                            <div className="decorative-circle circle-2"></div>
                            <div className="image-placeholder">
                                <div className="image-frame">
                                    <img src={images.aboutImage} alt="منصة ثقة التعليمية" />
                                </div>
                                <div className="image-dots"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <div className="section-tag">ما نقدمه</div>
                        <h2 className="section-title">خدماتنا</h2>
                        <div className="section-underline"></div>
                        <p className="section-description">نقدم مجموعة متنوعة من الخدمات التعليمية والأكاديمية المتخصصة</p>
                    </div>

                    <div className="services-grid staggered-grid">
                        <div className="service-card staggered-item">
                            <div className="service-icon academic">
                                <FaGraduationCap />
                            </div>
                            <h3 className="service-title">الخدمات الأكاديمية العامة</h3>
                            <p className="service-description">
                                حل الاختبارات والكويزات، إنجاز الواجبات، إعداد الأبحاث العلمية، وتصميم العروض التقديمية.
                            </p>
                            <Link to="/services" className="service-link">
                                <span>المزيد</span>
                                <span className="link-arrow"></span>
                            </Link>
                        </div>

                        <div className="service-card staggered-item">
                            <div className="service-icon postgraduate">
                                <FaUserGraduate />
                            </div>
                            <h3 className="service-title">خدمات الدراسات العليا</h3>
                            <p className="service-description">
                                مشاريع التخرج، إعداد رسائل الماجستير والدكتوراه، نقد وتحليل الأبحاث العلمية.
                            </p>
                            <Link to="/services" className="service-link">
                                <span>المزيد</span>
                                <span className="link-arrow"></span>
                            </Link>
                        </div>

                        <div className="service-card staggered-item">
                            <div className="service-icon health">
                                <FaHeartbeat />
                            </div>
                            <h3 className="service-title">خدمات التخصصات الصحية</h3>
                            <p className="service-description">
                                تحليل دراسات الحالة الطبية، إعداد خطط الرعاية التمريضية، كتابة التقارير الطبية.
                            </p>
                            <Link to="/services" className="service-link">
                                <span>المزيد</span>
                                <span className="link-arrow"></span>
                            </Link>
                        </div>

                        <div className="service-card staggered-item">
                            <div className="service-icon technical">
                                <FaLaptopCode />
                            </div>
                            <h3 className="service-title">الخدمات التقنية</h3>
                            <p className="service-description">
                                تنفيذ المشاريع البرمجية، تطوير تطبيقات الويب، والمشاريع التقنية والهندسية.
                            </p>
                            <Link to="/services" className="service-link">
                                <span>المزيد</span>
                                <span className="link-arrow"></span>
                            </Link>
                        </div>

                        <div className="service-card staggered-item">
                            <div className="service-icon language">
                                <FaLanguage />
                            </div>
                            <h3 className="service-title">الخدمات اللغوية</h3>
                            <p className="service-description">
                                الترجمة الأكاديمية المتخصصة، إعادة الصياغة العلمية، والتدقيق اللغوي والنحوي.
                            </p>
                            <Link to="/services" className="service-link">
                                <span>المزيد</span>
                                <span className="link-arrow"></span>
                            </Link>
                        </div>

                        <div className="service-card staggered-item">
                            <div className="service-icon ai">
                                <FaRobot />
                            </div>
                            <h3 className="service-title">خدمات الذكاء الاصطناعي</h3>
                            <p className="service-description">
                                تطوير نماذج الذكاء الاصطناعي، تحليل البيانات الذكي، أتمتة العمليات، وبناء حلول تقنية متقدمة.
                            </p>
                            <Link to="/services" className="service-link">
                                <span>المزيد</span>
                                <span className="link-arrow"></span>
                            </Link>
                        </div>
                    </div>

                    <div className="services-cta animate-on-scroll">
                        <Link to="/services" className="primary-button">
                            <span className="button-text">عرض جميع الخدمات</span>
                            <span className="button-shine"></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <div className="section-tag">لماذا تختارنا</div>
                        <h2 className="section-title">ما يميزنا</h2>
                        <div className="section-underline"></div>
                    </div>

                    <div className="features-grid staggered-grid">
                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-1"></div>
                                <span>01</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">التفوق الأكاديمي</h3>
                                <p className="feature-description">نضمن أعلى مستويات الجودة الأكاديمية مع ضمان الدرجة الكاملة</p>
                            </div>
                        </div>

                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-2"></div>
                                <span>02</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">الأمانة العلمية</h3>
                                <p className="feature-description">جميع أعمالنا أصلية ومبتكرة مع ضمان عدم السرقة العلمية</p>
                            </div>
                        </div>

                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-3"></div>
                                <span>03</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">فريق متخصص</h3>
                                <p className="feature-description">مختصون مؤهلون في جميع التخصصات العلمية والأدبية</p>
                            </div>
                        </div>

                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-4"></div>
                                <span>04</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">السرعة والدقة</h3>
                                <p className="feature-description">التزام تام بالمواعيد المحددة مع أعلى دقة في التنفيذ</p>
                            </div>
                        </div>

                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-5"></div>
                                <span>05</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">أسعار تنافسية</h3>
                                <p className="feature-description">جودة عالية بأسعار تناسب جميع الطلاب</p>
                            </div>
                        </div>

                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-6"></div>
                                <span>06</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">خدمة شاملة</h3>
                                <p className="feature-description">تغطية كاملة لجميع المواد في كافة التخصصات الجامعية</p>
                            </div>
                        </div>

                        <div className="feature-card staggered-item">
                            <div className="feature-icon">
                                <div className="feature-icon-bg feature-bg-7"></div>
                                <span>AI</span>
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">تقنيات الذكاء الاصطناعي</h3>
                                <p className="feature-description">نستخدم أحدث تقنيات الذكاء الاصطناعي لتطوير حلول مبتكرة وذكية</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta-section">
                <div className="cta-blob"></div>
                <div className="cta-particles"></div>
                <div className="container">
                    <div className="cta-content animate-on-scroll">
                        <h2 className="cta-title">هل تحتاج إلى مساعدة في دراستك؟</h2>
                        <p className="cta-description">تواصل معنا الآن للحصول على الدعم الأكاديمي الذي تحتاجه</p>
                        <div className="cta-buttons">
                            <a href="https://wa.me/1234567890" className="cta-button whatsapp">
                                <FaWhatsapp className="icon-pulse" />
                                <span>تواصل عبر واتساب</span>
                            </a>
                            <a href="https://t.me/username" className="cta-button telegram">
                                <FaTelegram className="icon-pulse" />
                                <span>تواصل عبر تيليجرام</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;