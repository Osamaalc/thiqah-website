// // // // src/components/Navbar.js
// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import '../styles/navbar.css';
// // // import { FaWhatsapp, FaTelegram, FaBars, FaTimes } from 'react-icons/fa';
// // //
// // // const Navbar = () => {
// // //     const [isScrolled, setIsScrolled] = useState(false);
// // //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //
// // //     // تغيير حالة الـ navbar عند التمرير
// // //     useEffect(() => {
// // //         const handleScroll = () => {
// // //             if (window.scrollY > 50) {
// // //                 setIsScrolled(true);
// // //             } else {
// // //                 setIsScrolled(false);
// // //             }
// // //         };
// // //
// // //         window.addEventListener('scroll', handleScroll);
// // //
// // //         return () => {
// // //             window.removeEventListener('scroll', handleScroll);
// // //         };
// // //     }, []);
// // //
// // //     // تبديل حالة القائمة في وضع الجوال
// // //     const toggleMobileMenu = () => {
// // //         setIsMobileMenuOpen(!isMobileMenuOpen);
// // //     };
// // //
// // //     return (
// // //         <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
// // //             <div className="navbar-container">
// // //                 <div className="logo">
// // //                     <Link to="/">
// // //                         <h1>ثقة</h1>
// // //                     </Link>
// // //                 </div>
// // //
// // //                 {/* قائمة التنقل الرئيسية */}
// // //                 <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
// // //                     <ul>
// // //                         <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</Link></li>
// // //                         <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>من نحن</Link></li>
// // //                         <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>خدماتنا</Link></li>
// // //                         <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>تواصل معنا</Link></li>
// // //                     </ul>
// // //                 </nav>
// // //
// // //                 {/* أزرار التواصل */}
// // //                 <div className="social-buttons">
// // //                     <a href="https://wa.me/1234567890" className="social-button whatsapp" target="_blank" rel="noopener noreferrer">
// // //                         <FaWhatsapp />
// // //                         <span className="tooltip">واتساب</span>
// // //                     </a>
// // //                     <a href="https://t.me/username" className="social-button telegram" target="_blank" rel="noopener noreferrer">
// // //                         <FaTelegram />
// // //                         <span className="tooltip">تليجرام</span>
// // //                     </a>
// // //                 </div>
// // //
// // //                 {/* زر القائمة للجوال */}
// // //                 <div className="mobile-menu-button" onClick={toggleMobileMenu}>
// // //                     {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
// // //                 </div>
// // //             </div>
// // //         </header>
// // //     );
// // // };
// // //
// // // export default Navbar;
// //
// // // src/components/Navbar.js
// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import {
// //     FaWhatsapp,
// //     FaTelegram,
// //     FaBars,
// //     FaTimes,
// //     FaGraduationCap,
// //     FaHome,
// //     FaInfoCircle,
// //     FaTools,
// //     FaHeadset,
// //     FaFacebookMessenger,
// //     FaSnapchatGhost
// // } from 'react-icons/fa';
// // import { contactLinks } from '../utils/assets';
// // import '../styles/navbar.css';
// //
// // const Navbar = () => {
// //     const [isScrolled, setIsScrolled] = useState(false);
// //     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //     const location = useLocation();
// //
// //     // تغيير حالة الـ navbar عند التمرير
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             if (window.scrollY > 50) {
// //                 setIsScrolled(true);
// //             } else {
// //                 setIsScrolled(false);
// //             }
// //         };
// //
// //         window.addEventListener('scroll', handleScroll);
// //
// //         return () => {
// //             window.removeEventListener('scroll', handleScroll);
// //         };
// //     }, []);
// //
// //     // إغلاق القائمة عند تغيير المسار
// //     useEffect(() => {
// //         setIsMobileMenuOpen(false);
// //     }, [location]);
// //
// //     // تبديل حالة القائمة في وضع الجوال
// //     const toggleMobileMenu = () => {
// //         setIsMobileMenuOpen(!isMobileMenuOpen);
// //     };
// //
// //     // تحديد الرابط النشط
// //     const isActive = (path) => {
// //         return location.pathname === path;
// //     };
// //
// //     return (
// //         <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
// //             <div className="navbar-container">
// //                 <div className="logo">
// //                     <Link to="/">
// //                         <div className="logo-container">
// //                             <div className={`logo-icon ${isScrolled ? 'scrolled' : ''}`}>
// //                                 <FaGraduationCap />
// //                                 <div className="logo-icon-overlay"></div>
// //                             </div>
// //                             <div className="logo-text">
// //                                 <span className="logo-main">ثقة</span>
// //                                 <span className="logo-sub">منصة تعليمية</span>
// //                             </div>
// //                         </div>
// //                     </Link>
// //                 </div>
// //
// //                 {/* قائمة التنقل الرئيسية */}
// //                 <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
// //                     <div className="nav-links-wrapper">
// //                         <ul>
// //                             <li>
// //                                 <Link to="/" className={isActive('/') ? 'active' : ''}>
// //                                     <FaHome className="nav-icon" />
// //                                     <span className="nav-link-text">الرئيسية</span>
// //                                     {isActive('/') && <span className="nav-link-indicator"></span>}
// //                                 </Link>
// //                             </li>
// //                             <li>
// //                                 <Link to="/about" className={isActive('/about') ? 'active' : ''}>
// //                                     <FaInfoCircle className="nav-icon" />
// //                                     <span className="nav-link-text">من نحن</span>
// //                                     {isActive('/about') && <span className="nav-link-indicator"></span>}
// //                                 </Link>
// //                             </li>
// //                             <li>
// //                                 <Link to="/services" className={isActive('/services') ? 'active' : ''}>
// //                                     <FaTools className="nav-icon" />
// //                                     <span className="nav-link-text">خدماتنا</span>
// //                                     {isActive('/services') && <span className="nav-link-indicator"></span>}
// //                                 </Link>
// //                             </li>
// //                             <li>
// //                                 <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
// //                                     <FaHeadset className="nav-icon" />
// //                                     <span className="nav-link-text">تواصل معنا</span>
// //                                     {isActive('/contact') && <span className="nav-link-indicator"></span>}
// //                                 </Link>
// //                             </li>
// //                         </ul>
// //
// //                         {/* أزرار التواصل في وضع الجوال */}
// //                         <div className="mobile-social-buttons">
// //                             <a href={contactLinks.whatsapp} className="mobile-social-button whatsapp" target="_blank" rel="noopener noreferrer">
// //                                 <FaWhatsapp />
// //                                 <span>تواصل عبر واتساب</span>
// //                             </a>
// //                             <a href={contactLinks.telegram} className="mobile-social-button telegram" target="_blank" rel="noopener noreferrer">
// //                                 <FaTelegram />
// //                                 <span>تواصل عبر تليجرام</span>
// //                             </a>
// //                             <a href={contactLinks.messenger} className="mobile-social-button messenger" target="_blank" rel="noopener noreferrer">
// //                                 <FaFacebookMessenger />
// //                                 <span>تواصل عبر ماسنجر</span>
// //                             </a>
// //                             <a href={contactLinks.snapchat} className="mobile-social-button snapchat" target="_blank" rel="noopener noreferrer">
// //                                 <FaSnapchatGhost />
// //                                 <span>تواصل عبر سناب شات</span>
// //                             </a>
// //                         </div>
// //                     </div>
// //                 </nav>
// //
// //                 {/* أزرار التواصل في وضع الديسكتوب */}
// //                 <div className="social-buttons">
// //                     <a href={contactLinks.whatsapp} className="social-button whatsapp" target="_blank" rel="noopener noreferrer" aria-label="واتساب">
// //                         <FaWhatsapp />
// //                         <div className="tooltip">واتساب</div>
// //                     </a>
// //                     <a href={contactLinks.telegram} className="social-button telegram" target="_blank" rel="noopener noreferrer" aria-label="تليجرام">
// //                         <FaTelegram />
// //                         <div className="tooltip">تليجرام</div>
// //                     </a>
// //                     <a href={contactLinks.messenger} className="social-button messenger" target="_blank" rel="noopener noreferrer" aria-label="ماسنجر">
// //                         <FaFacebookMessenger />
// //                         <div className="tooltip">ماسنجر</div>
// //                     </a>
// //                     <a href={contactLinks.snapchat} className="social-button snapchat" target="_blank" rel="noopener noreferrer" aria-label="سناب شات">
// //                         <FaSnapchatGhost />
// //                         <div className="tooltip">سناب شات</div>
// //                     </a>
// //                 </div>
// //
// //                 {/* زر القائمة للجوال */}
// //                 <button
// //                     className="mobile-menu-button"
// //                     onClick={toggleMobileMenu}
// //                     aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
// //                 >
// //                     {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
// //                 </button>
// //
// //                 {/* طبقة التعتيم خلف القائمة المفتوحة في وضع الجوال */}
// //                 {isMobileMenuOpen && (
// //                     <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
// //                 )}
// //             </div>
// //         </header>
// //     );
// // };
// //
// // export default Navbar;
//
//
// // src/components/Navbar.js
// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//     FaWhatsapp,
//     FaTelegram,
//     FaBars,
//     FaTimes,
//     FaGraduationCap,
//     FaHome,
//     FaInfoCircle,
//     FaCog,
//     FaHeadset,
//     FaFacebookMessenger,
//     FaSnapchatGhost,
//     FaSearch,
//     FaMoon,
//     FaSun
// } from 'react-icons/fa';
// import { ThemeContext } from '../contexts/ThemeContext';
// import '../styles/navbar.css';
//
// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [showSearch, setShowSearch] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [hideNavbar, setHideNavbar] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const searchInputRef = useRef(null);
//     const location = useLocation();
//
//     // استدعاء سياق الثيم
//     const { isDarkMode, toggleTheme } = useContext(ThemeContext);
//
//     // معالجة التمرير وإخفاء/إظهار الـ navbar
//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//
//             // تعيين حالة التمرير للتأثيرات البصرية
//             if (currentScrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//
//             // إخفاء navbar عند التمرير للأسفل وإظهاره عند التمرير للأعلى
//             if (currentScrollY > 200) {
//                 if (currentScrollY > lastScrollY + 20) {
//                     setHideNavbar(true);
//                 } else if (currentScrollY < lastScrollY - 10) {
//                     setHideNavbar(false);
//                 }
//             } else {
//                 setHideNavbar(false);
//             }
//
//             setLastScrollY(currentScrollY);
//         };
//
//         window.addEventListener('scroll', handleScroll, { passive: true });
//
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [lastScrollY]);
//
//     // إغلاق القائمة عند تغيير المسار
//     useEffect(() => {
//         setIsMobileMenuOpen(false);
//         setShowSearch(false);
//     }, [location]);
//
//     // التركيز على حقل البحث عند فتحه
//     useEffect(() => {
//         if (showSearch && searchInputRef.current) {
//             searchInputRef.current.focus();
//         }
//     }, [showSearch]);
//
//     // تبديل حالة القائمة في وضع الجوال
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         if (showSearch) setShowSearch(false);
//     };
//
//     // تبديل حالة البحث
//     const toggleSearch = () => {
//         setShowSearch(!showSearch);
//         if (isMobileMenuOpen) setIsMobileMenuOpen(false);
//     };
//
//     // تقديم البحث
//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         // يمكن تنفيذ منطق البحث هنا
//         console.log("Searching for:", searchQuery);
//         setShowSearch(false);
//     };
//
//     // تحديد الرابط النشط
//     const isActive = (path) => {
//         return location.pathname === path;
//     };
//
//     // معالجة ضغط الزر Escape
//     useEffect(() => {
//         const handleKeyDown = (event) => {
//             if (event.key === 'Escape') {
//                 setShowSearch(false);
//                 setIsMobileMenuOpen(false);
//             }
//
//             // إذا كان حقل البحث مفتوح وتم الضغط على Enter
//             if (event.key === 'Enter' && showSearch && searchQuery.trim()) {
//                 handleSearchSubmit({ preventDefault: () => {} });
//             }
//         };
//
//         window.addEventListener('keydown', handleKeyDown);
//         return () => {
//             window.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [showSearch, searchQuery]);
//
//     // روابط التواصل الاجتماعي - من الملف الأصلي
//     const contactLinks = {
//         whatsapp: "https://wa.me/1234567890",
//         telegram: "https://t.me/username",
//         messenger: "https://m.me/username",
//         snapchat: "https://www.snapchat.com/add/username"
//     };
//
//     return (
//         <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${hideNavbar ? 'hide' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
//             <div className="container navbar-container">
//                 {/* الشعار */}
//                 <div className="logo">
//                     <Link to="/">
//                         <div className="logo-container">
//                             <div className={`logo-icon ${isScrolled ? 'scrolled' : ''}`}>
//                                 <FaGraduationCap />
//                                 <div className="logo-icon-overlay"></div>
//                             </div>
//                             <div className="logo-text">
//                                 <span className="logo-main">ثقة</span>
//                                 <span className="logo-sub">منصة تعليمية</span>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//
//                 {/* القائمة الرئيسية */}
//                 <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
//                     <div className="nav-links-wrapper">
//                         <ul>
//                             <li>
//                                 <Link to="/" className={isActive('/') ? 'active' : ''}>
//                                     <FaHome className="nav-icon" />
//                                     <span className="nav-link-text">الرئيسية</span>
//                                     <span className={`nav-link-indicator ${isActive('/') ? 'active' : ''}`}></span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/about" className={isActive('/about') ? 'active' : ''}>
//                                     <FaInfoCircle className="nav-icon" />
//                                     <span className="nav-link-text">من نحن</span>
//                                     <span className={`nav-link-indicator ${isActive('/about') ? 'active' : ''}`}></span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/services" className={isActive('/services') ? 'active' : ''}>
//                                     <FaCog className="nav-icon" />
//                                     <span className="nav-link-text">خدماتنا</span>
//                                     <span className={`nav-link-indicator ${isActive('/services') ? 'active' : ''}`}></span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
//                                     <FaHeadset className="nav-icon" />
//                                     <span className="nav-link-text">تواصل معنا</span>
//                                     <span className={`nav-link-indicator ${isActive('/contact') ? 'active' : ''}`}></span>
//                                 </Link>
//                             </li>
//                         </ul>
//
//                         {/* أزرار التواصل في وضع الجوال */}
//                         <div className="mobile-social-buttons">
//                             <a href={contactLinks.whatsapp} className="mobile-social-button whatsapp" target="_blank" rel="noopener noreferrer">
//                                 <FaWhatsapp />
//                                 <span>تواصل عبر واتساب</span>
//                             </a>
//                             <a href={contactLinks.telegram} className="mobile-social-button telegram" target="_blank" rel="noopener noreferrer">
//                                 <FaTelegram />
//                                 <span>تواصل عبر تليجرام</span>
//                             </a>
//                             <a href={contactLinks.messenger} className="mobile-social-button messenger" target="_blank" rel="noopener noreferrer">
//                                 <FaFacebookMessenger />
//                                 <span>تواصل عبر ماسنجر</span>
//                             </a>
//                             <a href={contactLinks.snapchat} className="mobile-social-button snapchat" target="_blank" rel="noopener noreferrer">
//                                 <FaSnapchatGhost />
//                                 <span>تواصل عبر سناب شات</span>
//                             </a>
//                         </div>
//                     </div>
//                 </nav>
//
//                 {/* حقل البحث المحسن */}
//                 <div className={`search-container ${showSearch ? 'active' : ''}`}>
//                     <form onSubmit={handleSearchSubmit} className="search-form">
//                         <input
//                             type="text"
//                             placeholder="ابحث هنا..."
//                             ref={searchInputRef}
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             aria-label="حقل البحث"
//                             className="search-input"
//                         />
//                         <button type="submit" className="search-button" aria-label="بحث">
//                             <FaSearch />
//                         </button>
//                     </form>
//                 </div>
//
//                 {/* أزرار الإجراءات */}
//                 <div className="action-buttons">
//                     {/* زر البحث */}
//                     <button
//                         className="action-button search-toggle"
//                         onClick={toggleSearch}
//                         aria-label={showSearch ? 'إغلاق البحث' : 'فتح البحث'}
//                     >
//                         {showSearch ? <FaTimes /> : <FaSearch />}
//                     </button>
//
//                     {/* زر تبديل الثيم */}
//                     <button
//                         className="action-button theme-toggle"
//                         onClick={toggleTheme}
//                         aria-label={isDarkMode ? 'الوضع الفاتح' : 'الوضع المظلم'}
//                     >
//                         {isDarkMode ? <FaSun /> : <FaMoon />}
//                     </button>
//
//                     {/* أزرار التواصل في وضع سطح المكتب */}
//                     <div className="social-buttons">
//                         <a href={contactLinks.whatsapp} className="social-button whatsapp" target="_blank" rel="noopener noreferrer" aria-label="واتساب">
//                             <FaWhatsapp />
//                             <div className="tooltip">واتساب</div>
//                         </a>
//                         <a href={contactLinks.telegram} className="social-button telegram" target="_blank" rel="noopener noreferrer" aria-label="تليجرام">
//                             <FaTelegram />
//                             <div className="tooltip">تليجرام</div>
//                         </a>
//                         <a href={contactLinks.messenger} className="social-button messenger" target="_blank" rel="noopener noreferrer" aria-label="ماسنجر">
//                             <FaFacebookMessenger />
//                             <div className="tooltip">ماسنجر</div>
//                         </a>
//                         <a href={contactLinks.snapchat} className="social-button snapchat" target="_blank" rel="noopener noreferrer" aria-label="سناب شات">
//                             <FaSnapchatGhost />
//                             <div className="tooltip">سناب شات</div>
//                         </a>
//                     </div>
//
//                     {/* زر القائمة للجوال */}
//                     <button
//                         className="mobile-menu-button"
//                         onClick={toggleMobileMenu}
//                         aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
//                     >
//                         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//                     </button>
//                 </div>
//
//                 {/* طبقة التعتيم خلف القائمة المفتوحة في وضع الجوال */}
//                 {isMobileMenuOpen && (
//                     <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
//                 )}
//             </div>
//         </header>
//     );
// };
//
// export default Navbar;


// src/components/Navbar.js
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaWhatsapp,
    FaTelegram,
    FaBars,
    FaTimes,
    FaGraduationCap,
    FaHome,
    FaInfoCircle,
    FaCog,
    FaHeadset,
    FaFacebookMessenger,
    FaSnapchatGhost,
    FaSearch,
    FaMoon,
    FaSun
} from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchInputRef = useRef(null);
    const location = useLocation();

    // استدعاء سياق الثيم
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    // معالجة التمرير وإخفاء/إظهار الـ navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // تعيين حالة التمرير للتأثيرات البصرية
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // إخفاء navbar عند التمرير للأسفل وإظهاره عند التمرير للأعلى
            if (currentScrollY > 200) {
                if (currentScrollY > lastScrollY + 20) {
                    setHideNavbar(true);
                } else if (currentScrollY < lastScrollY - 10) {
                    setHideNavbar(false);
                }
            } else {
                setHideNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    // إغلاق القائمة عند تغيير المسار
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setShowSearch(false);
    }, [location]);

    // التركيز على حقل البحث عند فتحه
    useEffect(() => {
        if (showSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [showSearch]);

    // تبديل حالة القائمة في وضع الجوال
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (showSearch) setShowSearch(false);
    };

    // تبديل حالة البحث
    const toggleSearch = () => {
        setShowSearch(!showSearch);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    // تقديم البحث
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // يمكن تنفيذ منطق البحث هنا
        console.log("Searching for:", searchQuery);
        setShowSearch(false);
    };

    // تحديد الرابط النشط
    const isActive = (path) => {
        return location.pathname === path;
    };

    // معالجة ضغط الزر Escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowSearch(false);
                setIsMobileMenuOpen(false);
            }

            // إذا كان حقل البحث مفتوح وتم الضغط على Enter
            if (event.key === 'Enter' && showSearch && searchQuery.trim()) {
                handleSearchSubmit({ preventDefault: () => {} });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showSearch, searchQuery]);

    // روابط التواصل الاجتماعي - من الملف الأصلي
    const contactLinks = {
        whatsapp: "https://wa.me/1234567890",
        telegram: "https://t.me/username",
        messenger: "https://m.me/username",
        snapchat: "https://www.snapchat.com/add/username"
    };

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${hideNavbar ? 'hide' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="container navbar-container">
                {/* الشعار */}
                <div className="logo">
                    <Link to="/">
                        <div className="logo-container">
                            <div className={`logo-icon ${isScrolled ? 'scrolled' : ''}`}>
                                <FaGraduationCap />
                                <div className="logo-icon-overlay"></div>
                            </div>
                            <div className="logo-text">
                                <span className="logo-main">ثقة</span>
                                <span className="logo-sub">منصة تعليمية</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* القائمة الرئيسية */}
                <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <div className="nav-links-wrapper">
                        <ul>
                            <li>
                                <Link to="/" className={isActive('/') ? 'active' : ''}>
                                    <FaHome className="nav-icon" />
                                    <span className="nav-link-text">الرئيسية</span>
                                    <span className={`nav-link-indicator ${isActive('/') ? 'active' : ''}`}></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                                    <FaInfoCircle className="nav-icon" />
                                    <span className="nav-link-text">من نحن</span>
                                    <span className={`nav-link-indicator ${isActive('/about') ? 'active' : ''}`}></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className={isActive('/services') ? 'active' : ''}>
                                    <FaCog className="nav-icon" />
                                    <span className="nav-link-text">خدماتنا</span>
                                    <span className={`nav-link-indicator ${isActive('/services') ? 'active' : ''}`}></span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                                    <FaHeadset className="nav-icon" />
                                    <span className="nav-link-text">تواصل معنا</span>
                                    <span className={`nav-link-indicator ${isActive('/contact') ? 'active' : ''}`}></span>
                                </Link>
                            </li>
                        </ul>

                        {/* أزرار التواصل في وضع الجوال */}
                        <div className="mobile-social-buttons">
                            <a href={contactLinks.whatsapp} className="mobile-social-button whatsapp" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                                <span>تواصل عبر واتساب</span>
                            </a>
                            <a href={contactLinks.telegram} className="mobile-social-button telegram" target="_blank" rel="noopener noreferrer">
                                <FaTelegram />
                                <span>تواصل عبر تليجرام</span>
                            </a>
                            <a href={contactLinks.messenger} className="mobile-social-button messenger" target="_blank" rel="noopener noreferrer">
                                <FaFacebookMessenger />
                                <span>تواصل عبر ماسنجر</span>
                            </a>
                            <a href={contactLinks.snapchat} className="mobile-social-button snapchat" target="_blank" rel="noopener noreferrer">
                                <FaSnapchatGhost />
                                <span>تواصل عبر سناب شات</span>
                            </a>
                        </div>
                    </div>
                </nav>

                {/* حقل البحث المحسن */}
                <div className={`search-container ${showSearch ? 'active' : ''}`}>
                    <form onSubmit={handleSearchSubmit} className="search-form">
                        <input
                            type="text"
                            placeholder="ابحث هنا..."
                            ref={searchInputRef}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="حقل البحث"
                            className="search-input"
                        />
                        <button type="submit" className="search-button" aria-label="بحث">
                            <FaSearch />
                        </button>
                    </form>
                </div>

                <div className="navbar-actions">
                    {/* أزرار التواصل الاجتماعي - في جهة مستقلة */}
                    <div className="social-buttons-wrapper">
                        <div className="social-buttons">
                            <a href={contactLinks.whatsapp} className="social-button whatsapp" target="_blank" rel="noopener noreferrer" aria-label="واتساب">
                                <FaWhatsapp />
                                <div className="tooltip">واتساب</div>
                            </a>
                            <a href={contactLinks.telegram} className="social-button telegram" target="_blank" rel="noopener noreferrer" aria-label="تليجرام">
                                <FaTelegram />
                                <div className="tooltip">تليجرام</div>
                            </a>
                            <a href={contactLinks.messenger} className="social-button messenger" target="_blank" rel="noopener noreferrer" aria-label="ماسنجر">
                                <FaFacebookMessenger />
                                <div className="tooltip">ماسنجر</div>
                            </a>
                            <a href={contactLinks.snapchat} className="social-button snapchat" target="_blank" rel="noopener noreferrer" aria-label="سناب شات">
                                <FaSnapchatGhost />
                                <div className="tooltip">سناب شات</div>
                            </a>
                        </div>
                    </div>

                    {/* الفاصل بين المجموعتين */}
                    <div className="navbar-divider"></div>

                    {/* أزرار الإجراءات - في جهة منفصلة */}
                    <div className="utility-buttons">
                        {/* زر البحث */}
                        <button
                            className="action-button search-toggle"
                            onClick={toggleSearch}
                            aria-label={showSearch ? 'إغلاق البحث' : 'فتح البحث'}
                        >
                            {showSearch ? <FaTimes /> : <FaSearch />}
                        </button>

                        {/* زر تبديل الثيم */}
                        <button
                            className="action-button theme-toggle"
                            onClick={toggleTheme}
                            aria-label={isDarkMode ? 'الوضع الفاتح' : 'الوضع المظلم'}
                        >
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* زر القائمة للجوال */}
                        <button
                            className="mobile-menu-button"
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* طبقة التعتيم خلف القائمة المفتوحة في وضع الجوال */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
                )}
            </div>
        </header>
    );
};

export default Navbar;