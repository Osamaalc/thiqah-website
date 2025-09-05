// src/utils/animations.js

/**
 * إنشاء جسيمات متحركة في خلفية الصفحة
 */
export const createBackgroundParticles = () => {
    const container = document.createElement('div');
    container.className = 'bg-particles';
    document.body.appendChild(container);

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // حجم عشوائي بين 3px و 12px
        const size = Math.floor(Math.random() * 10) + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // موقع عشوائي
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // شفافية عشوائية
        particle.style.setProperty('--particle-opacity', `${Math.random() * 0.2 + 0.1}`);

        // مدة رسوم متحركة عشوائية
        particle.style.setProperty('--float-time', `${Math.random() * 15 + 10}s`);

        // مسارات حركة عشوائية
        particle.style.setProperty('--x1', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--y1', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--x2', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--y2', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--x3', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--y3', `${Math.random() * 200 - 100}px`);

        container.appendChild(particle);
    }
};

/**
 * إنشاء أشكال عائمة للقسم الرئيسي
 */
export const createHeroFloatingShapes = () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'hero-floating-shapes';
    heroSection.appendChild(shapesContainer);

    // إضافة خلفية متدرجة متحركة
    const animatedGradient = document.createElement('div');
    animatedGradient.className = 'hero-animated-gradient';
    heroSection.insertBefore(animatedGradient, heroSection.firstChild);

    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';

        // حجم عشوائي بين 50px و 200px
        const size = Math.floor(Math.random() * 150) + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        // موقع عشوائي
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;

        // شفافية عشوائية
        shape.style.setProperty('--shape-opacity', `${Math.random() * 0.2 + 0.05}`);

        // مدة رسوم متحركة عشوائية
        shape.style.setProperty('--floating-time', `${Math.random() * 15 + 15}s`);

        // مسارات حركة عشوائية
        shape.style.setProperty('--floating-x1', `${Math.random() * 100 - 50}px`);
        shape.style.setProperty('--floating-y1', `${Math.random() * 100 - 50}px`);
        shape.style.setProperty('--floating-x2', `${Math.random() * 100 - 50}px`);
        shape.style.setProperty('--floating-y2', `${Math.random() * 100 - 50}px`);
        shape.style.setProperty('--floating-x3', `${Math.random() * 100 - 50}px`);
        shape.style.setProperty('--floating-y3', `${Math.random() * 100 - 50}px`);

        shapesContainer.appendChild(shape);
    }
};

/**
 * إضافة تأثير الإمالة ثلاثي الأبعاد
 */
export const addTiltEffect = () => {
    const imageContainer = document.querySelector('.image-placeholder');
    if (!imageContainer) return;

    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // حساب الدوران بناءً على موقع الماوس
        // تحديد الدوران لمقدار صغير للحصول على تأثير خفي
        const rotateX = (y - centerY) / centerY * 5; // أقصى 5 درجات
        const rotateY = (centerX - x) / centerX * 5; // أقصى 5 درجات

        imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        imageContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
};

/**
 * تحريك نص القسم حول المنصة عند التمرير
 */
export const animateAboutText = () => {
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (!aboutParagraphs.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // إضافة رسوم متحركة متتالية للفقرات
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });

    aboutParagraphs.forEach(p => observer.observe(p));
};

/**
 * إضافة تأثيرات تحميل الصفحة
 */
export const initPageLoadAnimations = () => {
    // إضافة فئة للجسم للإشارة إلى أن الصفحة محملة
    document.body.classList.add('page-loaded');

    // تأثيرات تدريجية للعناصر
    const elementsToAnimate = document.querySelectorAll('.fade-in-on-load');
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    });
};

/**
 * تنظيف عناصر الرسوم المتحركة
 */
export const cleanupAnimations = () => {
    const particles = document.querySelector('.bg-particles');
    if (particles) particles.remove();

    const floatingShapes = document.querySelector('.hero-floating-shapes');
    if (floatingShapes) floatingShapes.remove();

    const animatedGradient = document.querySelector('.hero-animated-gradient');
    if (animatedGradient) animatedGradient.remove();
};

/**
 * تهيئة مراقب التمرير للرسوم المتحركة
 */
export const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // رسوم متحركة متتالية للشبكات
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

    return observer;
};

/**
 * تأثير التمرير المتوازي للقسم الرئيسي
 */
export const initParallaxEffect = (heroRef) => {
    const handleScroll = () => {
        if (heroRef.current) {
            const scrollPosition = window.scrollY;
            const heroElement = heroRef.current;
            const opacity = Math.max(0, Math.min(1, 1 - scrollPosition / 700));
            heroElement.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            const heroContent = heroElement.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = opacity;
            }
        }
    };

    return handleScroll;
};

/**
 * تأثيرات التمرير السلس
 */
export const smoothScrollTo = (target, offset = 0) => {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
};