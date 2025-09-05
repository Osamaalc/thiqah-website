// src/components/home/AboutSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const AboutSection = ({ aboutImageRef, images }) => {
    return (
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
    );
};

export default AboutSection;