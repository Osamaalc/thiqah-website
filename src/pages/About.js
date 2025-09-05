

// src/pages/About.js
import React, { useEffect, useContext } from 'react';
import { FaQuoteRight, FaUserGraduate, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
import { images } from '../utils/assets';
import '../styles/about.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext

const About = () => {
    // Get dark mode state from context
    const { isDarkMode } = useContext(ThemeContext);

    // Animation effect on scroll
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        return () => {
            animatedElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        // Add dark-mode class when isDarkMode is true
        <div className={`about-page ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Welcome Section */}
            <section className="about-hero-section">
                <div className="about-hero-overlay"></div>
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title animate-on-scroll">من نحن</h1>
                        <div className="about-hero-separator animate-on-scroll"></div>
                        <p className="about-hero-description animate-on-scroll">
                            تعرف على منصة ثقة التعليمية ورؤيتنا ورسالتنا في دعم الطلاب وتقديم أفضل الخدمات الأكاديمية
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story-section">
                <div className="container">
                    <div className="about-story-content">
                        <div className="about-story-image animate-on-scroll">
                            <img src={images.aboutImage} alt="منصة ثقة التعليمية" />
                            <div className="about-story-decoration"></div>
                        </div>

                        <div className="about-story-text">
                            <h2 className="section-title animate-on-scroll">قصتنا</h2>
                            <div className="section-underline animate-on-scroll"></div>

                            <div className="about-story-quote animate-on-scroll">
                                <FaQuoteRight className="quote-icon" />
                                <p>منصة ثقة هي منصة تعليمية أكاديمية متخصصة في تقديم حلول تعليمية متكاملة باحترافية عالية.</p>
                            </div>

                            <p className="animate-on-scroll">
                                تأسست منصة ثقة بهدف دعم الطالب في جميع المراحل الدراسية والتخصصات من خلال فريق مؤهل من المعلمين والباحثين ذوي الخبرة والدرجات العلمية المتقدمة.
                            </p>

                            <p className="animate-on-scroll">
                                نتميز بالدقة والجودة والالتزام بالمعايير الأكاديمية مع ضمان السرية والموثوقية في جميع الخدمات.
                            </p>

                            <p className="animate-on-scroll">
                                في منصة ثقة، نؤمن بأن لكل طالب طموح الحق في الحصول على دعم تعليمي موثوق، لذلك نسعى لتبسيط العملية التعليمية وتعزيز فرص التفوق والنجاح.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-mission-section">
                <div className="vision-mission-decoration"></div>
                <div className="container">
                    <div className="vision-mission-cards">
                        <div className="vision-mission-card animate-on-scroll">
                            <h3 className="card-title">رؤيتنا</h3>
                            <div className="card-separator"></div>
                            <p className="card-content">
                                أن نكون المنصة الرائدة في تقديم الخدمات الأكاديمية المتخصصة، ونساهم في بناء جيل متميز من الطلاب المبدعين والباحثين المتفوقين.
                            </p>
                        </div>

                        <div className="vision-mission-card animate-on-scroll">
                            <h3 className="card-title">رسالتنا</h3>
                            <div className="card-separator"></div>
                            <p className="card-content">
                                تقديم حلول أكاديمية مبتكرة وموثوقة تساعد الطلاب على تحقيق أهدافهم التعليمية بأعلى مستوى من الجودة والمهنية، مع الحفاظ على الأمانة العلمية والنزاهة الأكاديمية.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 className="section-title text-center animate-on-scroll">فريقنا</h2>
                    <div className="section-underline center animate-on-scroll"></div>
                    <p className="section-description text-center animate-on-scroll">
                        يضم فريق منصة ثقة نخبة من الخبراء الأكاديميين المتخصصين في مختلف المجالات
                    </p>

                    <div className="team-members">
                        <div className="team-member animate-on-scroll">
                            <div className="member-icon">
                                <FaUserGraduate />
                            </div>
                            <h3 className="member-title">باحثون متخصصون</h3>
                            <p className="member-description">
                                فريق من الباحثين الحاصلين على درجات علمية متقدمة في مختلف التخصصات
                            </p>
                        </div>

                        <div className="team-member animate-on-scroll">
                            <div className="member-icon">
                                <FaChalkboardTeacher />
                            </div>
                            <h3 className="member-title">معلمون محترفون</h3>
                            <p className="member-description">
                                معلمون ذوو خبرة واسعة في التدريس والشرح وتبسيط المعلومات للطلاب
                            </p>
                        </div>

                        <div className="team-member animate-on-scroll">
                            <div className="member-icon">
                                <FaAward />
                            </div>
                            <h3 className="member-title">خبراء أكاديميون</h3>
                            <p className="member-description">
                                خبراء في إعداد الأبحاث والرسائل العلمية وفق أعلى المعايير الأكاديمية
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title text-center animate-on-scroll">قيمنا</h2>
                    <div className="section-underline center animate-on-scroll"></div>

                    <div className="values-grid">
                        <div className="value-item animate-on-scroll">
                            <h3 className="value-title">التميز الأكاديمي</h3>
                            <p className="value-description">
                                نسعى دائماً لتقديم خدمات أكاديمية متميزة تلبي أعلى معايير الجودة والدقة.
                            </p>
                        </div>

                        <div className="value-item animate-on-scroll">
                            <h3 className="value-title">النزاهة والأمانة</h3>
                            <p className="value-description">
                                نلتزم بأعلى معايير الأمانة العلمية والنزاهة الأكاديمية في جميع أعمالنا.
                            </p>
                        </div>

                        <div className="value-item animate-on-scroll">
                            <h3 className="value-title">الاحترافية</h3>
                            <p className="value-description">
                                نعمل باحترافية عالية ونلتزم بالمواعيد المحددة والدقة في التنفيذ.
                            </p>
                        </div>

                        <div className="value-item animate-on-scroll">
                            <h3 className="value-title">التعلم المستمر</h3>
                            <p className="value-description">
                                نؤمن بأهمية التعلم المستمر ومواكبة التطورات في مختلف المجالات الأكاديمية.
                            </p>
                        </div>

                        <div className="value-item animate-on-scroll">
                            <h3 className="value-title">دعم الطلاب</h3>
                            <p className="value-description">
                                نضع نجاح الطلاب في مقدمة أولوياتنا ونسعى لدعمهم في تحقيق أهدافهم التعليمية.
                            </p>
                        </div>

                        <div className="value-item animate-on-scroll">
                            <h3 className="value-title">السرية</h3>
                            <p className="value-description">
                                نحافظ على سرية وخصوصية جميع المعلومات والبيانات الخاصة بعملائنا.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;