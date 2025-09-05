// src/components/home/ContactCTASection.js
import React from 'react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const ContactCTASection = () => {
    return (
        <section className="contact-cta-section">
            <div className="cta-blob"></div>
            <div className="cta-particles"></div>
            <div className="container">
                <div className="cta-content animate-on-scroll">
                    <h2 className="cta-title">هل تحتاج إلى مساعدة في دراستك؟</h2>
                    <p className="cta-description">
                        تواصل معنا الآن للحصول على الدعم الأكاديمي الذي تحتاجه
                    </p>
                    <div className="cta-buttons">
                        <a
                            href="https://wa.me/1234567890"
                            className="cta-button whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="icon-pulse" />
                            <span>تواصل عبر واتساب</span>
                        </a>
                        <a
                            href="https://t.me/username"
                            className="cta-button telegram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTelegram className="icon-pulse" />
                            <span>تواصل عبر تيليجرام</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTASection;