// // src/components/Footer.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaWhatsapp, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import '../styles/footer.css';
//
// const Footer = () => {
//     const currentYear = new Date().getFullYear();
//
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="footer-content">
//                     <div className="footer-section about">
//                         <h2 className="footer-logo">ثقة</h2>
//                         <p className="footer-description">
//                             منصة تعليمية أكاديمية متخصصة في تقديم حلول تعليمية متكاملة باحترافية عالية، تدعم الطالب في جميع المراحل الدراسية والتخصصات.
//                         </p>
//                         <div className="social-links">
//                             <a href="https://wa.me/1234567890" className="social-link whatsapp">
//                                 <FaWhatsapp />
//                             </a>
//                             <a href="https://t.me/username" className="social-link telegram">
//                                 <FaTelegram />
//                             </a>
//                             <a href="mailto:info@thiqah.com" className="social-link email">
//                                 <FaEnvelope />
//                             </a>
//                         </div>
//                     </div>
//
//                     <div className="footer-section links">
//                         <h3>روابط سريعة</h3>
//                         <ul>
//                             <li><Link to="/">الرئيسية</Link></li>
//                             <li><Link to="/about">من نحن</Link></li>
//                             <li><Link to="/services">خدماتنا</Link></li>
//                             <li><Link to="/contact">تواصل معنا</Link></li>
//                         </ul>
//                     </div>
//
//                     <div className="footer-section services">
//                         <h3>خدماتنا</h3>
//                         <ul>
//                             <li><Link to="/services">الخدمات الأكاديمية</Link></li>
//                             <li><Link to="/services">خدمات الدراسات العليا</Link></li>
//                             <li><Link to="/services">الخدمات الصحية</Link></li>
//                             <li><Link to="/services">الخدمات التقنية</Link></li>
//                             <li><Link to="/services">الخدمات اللغوية</Link></li>
//                         </ul>
//                     </div>
//
//                     <div className="footer-section contact">
//                         <h3>تواصل معنا</h3>
//                         <div className="contact-info">
//                             <div className="contact-item">
//                                 <FaPhone />
//                                 <span>+966 123 456 789</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FaEnvelope />
//                                 <span>info@thiqah.com</span>
//                             </div>
//                             <div className="contact-item">
//                                 <FaMapMarkerAlt />
//                                 <span>المملكة العربية السعودية</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="footer-bottom">
//                     <div className="copyright">
//                         &copy; {currentYear} منصة ثقة التعليمية. جميع الحقوق محفوظة.
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };
//
// export default Footer;

// src/components/Footer.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
    FaWhatsapp,
    FaTelegram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaGraduationCap
} from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { theme } = useContext(ThemeContext);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="footer-logo-container">
                            <div className="footer-logo-icon">
                                <FaGraduationCap />
                            </div>
                            <h2 className="footer-logo">ثقة</h2>
                        </div>
                        <p className="footer-description">
                            منصة تعليمية أكاديمية متخصصة في تقديم حلول تعليمية متكاملة باحترافية عالية، تدعم الطالب في جميع المراحل الدراسية والتخصصات.
                        </p>
                        <div className="social-links">
                            <a href="https://wa.me/1234567890" className="social-link whatsapp" aria-label="واتساب">
                                <FaWhatsapp />
                                <div className="tooltip">واتساب</div>
                            </a>
                            <a href="https://t.me/username" className="social-link telegram" aria-label="تليجرام">
                                <FaTelegram />
                                <div className="tooltip">تليجرام</div>
                            </a>
                            <a href="mailto:info@thiqah.com" className="social-link email" aria-label="البريد الإلكتروني">
                                <FaEnvelope />
                                <div className="tooltip">البريد الإلكتروني</div>
                            </a>
                            <a href="https://facebook.com" className="social-link facebook" aria-label="فيسبوك">
                                <FaFacebookF />
                                <div className="tooltip">فيسبوك</div>
                            </a>
                            <a href="https://instagram.com" className="social-link instagram" aria-label="انستغرام">
                                <FaInstagram />
                                <div className="tooltip">انستغرام</div>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section links">
                        <h3>روابط سريعة</h3>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/services">خدماتنا</Link></li>
                            <li><Link to="/contact">تواصل معنا</Link></li>
                            <li><Link to="/blog">المدونة</Link></li>
                            <li><Link to="/faq">الأسئلة الشائعة</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section services">
                        <h3>خدماتنا</h3>
                        <ul>
                            <li><Link to="/services">الخدمات الأكاديمية</Link></li>
                            <li><Link to="/services">خدمات الدراسات العليا</Link></li>
                            <li><Link to="/services">الخدمات الصحية</Link></li>
                            <li><Link to="/services">الخدمات التقنية</Link></li>
                            <li><Link to="/services">الخدمات اللغوية</Link></li>
                            <li><Link to="/services">دورات تدريبية</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3>تواصل معنا</h3>
                        <div className="contact-info">
                            <a href="tel:+966123456789" className="contact-item">
                                <FaPhone />
                                <span>+966 123 456 789</span>
                            </a>
                            <a href="mailto:info@thiqah.com" className="contact-item">
                                <FaEnvelope />
                                <span>info@thiqah.com</span>
                            </a>
                            <div className="contact-item">
                                <FaMapMarkerAlt />
                                <span>المملكة العربية السعودية، الرياض</span>
                            </div>

                            <div className="newsletter">
                                <h4>اشترك في النشرة البريدية</h4>
                                <form className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder="البريد الإلكتروني"
                                        className="form-control"
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary">اشترك</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; {currentYear} منصة ثقة التعليمية. جميع الحقوق محفوظة.
                    </div>
                    <div className="footer-links">
                        <Link to="/privacy">سياسة الخصوصية</Link>
                        <Link to="/terms">الشروط والأحكام</Link>
                    </div>
                </div>
            </div>

            <div className="footer-decoration">
                <div className="footer-shape footer-shape-1"></div>
                <div className="footer-shape footer-shape-2"></div>
            </div>
        </footer>
    );
};

export default Footer;