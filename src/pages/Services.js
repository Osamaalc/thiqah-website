// // src/pages/Services.js
// import React, { useState, useEffect } from 'react';
// import {
//     FaGraduationCap,
//     FaUserGraduate,
//     FaHeartbeat,
//     FaLaptopCode,
//     FaLanguage,
//     FaClipboardCheck,
//     FaBook,
//     FaChalkboardTeacher,
//     FaLaptop,
//     FaPencilAlt,
//     FaFileAlt,
//     FaFilePowerpoint,
//     FaFileContract,
//     FaStethoscope,
//     FaNotesMedical,
//     FaCode,
//     FaMobileAlt,
//     FaExchangeAlt,
//     FaCheckCircle,
//     FaRegFileAlt
// } from 'react-icons/fa';
// import { images } from '../utils/assets';
// import '../styles/services.css';
//
// const Services = () => {
//     const [activeTab, setActiveTab] = useState('academic');
//
//     // تأثير حركي عند التمرير
//     useEffect(() => {
//         const observerOptions = {
//             threshold: 0.1,
//             rootMargin: "0px 0px -50px 0px"
//         };
//
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('animate');
//                 }
//             });
//         }, observerOptions);
//
//         const animatedElements = document.querySelectorAll('.animate-on-scroll');
//         animatedElements.forEach(el => observer.observe(el));
//
//         return () => {
//             animatedElements.forEach(el => observer.unobserve(el));
//         };
//     }, []);
//
//     // تغيير التبويب النشط
//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };
//
//     return (
//         <div className="services-page">
//             {/* قسم الترحيب */}
//             <section className="services-hero-section">
//                 <div className="services-hero-overlay"></div>
//                 <div className="container">
//                     <div className="services-hero-content">
//                         <h1 className="services-hero-title animate-on-scroll">خدماتنا</h1>
//                         <div className="services-hero-separator animate-on-scroll"></div>
//                         <p className="services-hero-description animate-on-scroll">
//                             نقدم مجموعة متنوعة من الخدمات التعليمية والأكاديمية المتخصصة لدعم الطلاب في مختلف المراحل الدراسية
//                         </p>
//                     </div>
//                 </div>
//             </section>
//
//             {/* قسم الخدمات */}
//             <section className="services-main-section">
//                 <div className="container">
//                     <div className="services-tabs animate-on-scroll">
//                         <button
//                             className={`services-tab ${activeTab === 'academic' ? 'active' : ''}`}
//                             onClick={() => handleTabChange('academic')}
//                         >
//                             <FaGraduationCap />
//                             <span>الخدمات الأكاديمية</span>
//                         </button>
//
//                         <button
//                             className={`services-tab ${activeTab === 'postgraduate' ? 'active' : ''}`}
//                             onClick={() => handleTabChange('postgraduate')}
//                         >
//                             <FaUserGraduate />
//                             <span>الدراسات العليا</span>
//                         </button>
//
//                         <button
//                             className={`services-tab ${activeTab === 'health' ? 'active' : ''}`}
//                             onClick={() => handleTabChange('health')}
//                         >
//                             <FaHeartbeat />
//                             <span>التخصصات الصحية</span>
//                         </button>
//
//                         <button
//                             className={`services-tab ${activeTab === 'technical' ? 'active' : ''}`}
//                             onClick={() => handleTabChange('technical')}
//                         >
//                             <FaLaptopCode />
//                             <span>الخدمات التقنية</span>
//                         </button>
//
//                         <button
//                             className={`services-tab ${activeTab === 'language' ? 'active' : ''}`}
//                             onClick={() => handleTabChange('language')}
//                         >
//                             <FaLanguage />
//                             <span>الخدمات اللغوية</span>
//                         </button>
//                     </div>
//
//                     <div className="services-content">
//                         {/* الخدمات الأكاديمية */}
//                         <div className={`services-tab-content ${activeTab === 'academic' ? 'active' : ''}`}>
//                             <div className="services-header animate-on-scroll">
//                                 <div className="services-icon academic">
//                                     <FaGraduationCap />
//                                 </div>
//                                 <div className="services-header-text">
//                                     <h2>الخدمات الأكاديمية العامة</h2>
//                                     <p>نقدم مجموعة متكاملة من الخدمات الأكاديمية لطلاب المراحل الجامعية</p>
//                                 </div>
//                             </div>
//
//                             <div className="services-list">
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaClipboardCheck />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>حل الاختبارات والكويزات</h3>
//                                         <p>مساعدة في حل الاختبارات والكويزات لجميع التخصصات والجامعات بدقة واحترافية عالية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaBook />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>إنجاز الواجبات</h3>
//                                         <p>إنجاز الواجبات الدراسية بدقة واحترافية وفق المعايير الأكاديمية المطلوبة.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaFileAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>إعداد الأبحاث العلمية</h3>
//                                         <p>إعداد الأبحاث العلمية باللغتين العربية والإنجليزية مع المراجع الموثوقة وفق المعايير الأكاديمية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaFilePowerpoint />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>تصميم العروض التقديمية</h3>
//                                         <p>تصميم عروض الباوربوينت بأعلى مستوى إبداعي ومهني يناسب المتطلبات الأكاديمية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaRegFileAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>كتابة الملخصات والشروحات</h3>
//                                         <p>كتابة ملخصات وشروحات للمواد الدراسية بطريقة مبسطة وشاملة تساعد الطلاب على الفهم والاستيعاب.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaChalkboardTeacher />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>المساعدة في المناقشات والأنشطة</h3>
//                                         <p>تقديم الدعم في المناقشات والأنشطة الأسبوعية بمحتوى علمي دقيق ومتميز.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* خدمات الدراسات العليا */}
//                         <div className={`services-tab-content ${activeTab === 'postgraduate' ? 'active' : ''}`}>
//                             <div className="services-header animate-on-scroll">
//                                 <div className="services-icon postgraduate">
//                                     <FaUserGraduate />
//                                 </div>
//                                 <div className="services-header-text">
//                                     <h2>خدمات الدراسات العليا</h2>
//                                     <p>نقدم خدمات متخصصة لطلاب الدراسات العليا (الماجستير والدكتوراه) بأعلى مستويات الجودة الأكاديمية</p>
//                                 </div>
//                             </div>
//
//                             <div className="services-list">
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaFileContract />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>مشاريع التخرج</h3>
//                                         <p>إعداد وبحث وتطوير وتحليل شامل لمشاريع التخرج، مع المساعدة في اختيار الموضوع المناسب.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaFileAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>إعداد رسائل الماجستير والدكتوراه</h3>
//                                         <p>إعداد رسائل الماجستير والدكتوراه وفقاً للمعايير الأكاديمية الصارمة وبمنهجية علمية دقيقة.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaPencilAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>نقد وتحليل الأبحاث العلمية</h3>
//                                         <p>تقديم نقد علمي موضوعي وتحليل دقيق للأبحاث العلمية في مختلف التخصصات.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaLaptop />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>تحليل البيانات الأكاديمية</h3>
//                                         <p>تحليل البيانات الأكاديمية وإعداد النتائج باستخدام البرامج الإحصائية المتخصصة.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* خدمات التخصصات الصحية */}
//                         <div className={`services-tab-content ${activeTab === 'health' ? 'active' : ''}`}>
//                             <div className="services-header animate-on-scroll">
//                                 <div className="services-icon health">
//                                     <FaHeartbeat />
//                                 </div>
//                                 <div className="services-header-text">
//                                     <h2>خدمات التخصصات الصحية</h2>
//                                     <p>خدمات متخصصة للطلاب في المجالات الطبية والصحية بمختلف فروعها</p>
//                                 </div>
//                             </div>
//
//                             <div className="services-list">
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaStethoscope />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>تحليل دراسات الحالة الطبية</h3>
//                                         <p>تحليل دراسات الحالة الطبية وتقديم الحلول العلمية المناسبة بناءً على الأدلة والبراهين الطبية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaNotesMedical />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>إعداد خطط الرعاية التمريضية</h3>
//                                         <p>إعداد خطط الرعاية التمريضية الشاملة وفق أحدث المعايير والبروتوكولات العالمية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaFileAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>كتابة التقارير الطبية</h3>
//                                         <p>كتابة التقارير الطبية المتكاملة وفق المعايير المهنية والأكاديمية المعتمدة.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaBook />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>إعداد البحوث والمقالات الطبية</h3>
//                                         <p>إعداد البحوث والمقالات الطبية المدعومة بالأدلة العلمية والمراجع الطبية الموثوقة.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* الخدمات التقنية */}
//                         <div className={`services-tab-content ${activeTab === 'technical' ? 'active' : ''}`}>
//                             <div className="services-header animate-on-scroll">
//                                 <div className="services-icon technical">
//                                     <FaLaptopCode />
//                                 </div>
//                                 <div className="services-header-text">
//                                     <h2>الخدمات التقنية</h2>
//                                     <p>خدمات احترافية في مجال تكنولوجيا المعلومات والبرمجة والهندسة</p>
//                                 </div>
//                             </div>
//
//                             <div className="services-list">
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaCode />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>تنفيذ المشاريع البرمجية</h3>
//                                         <p>تنفيذ المشاريع البرمجية وتطبيقات الويب من قبل مطورين متخصصين بخبرة عالية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaMobileAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>تطوير تطبيقات الهواتف الذكية</h3>
//                                         <p>تطوير تطبيقات الهواتف الذكية لنظامي Android و iOS وفق أحدث التقنيات والمعايير.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaLaptop />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>تطوير المشاريع التقنية والهندسية</h3>
//                                         <p>تطوير المشاريع التقنية والهندسية بقيادة مختصين أكفاء في مختلف المجالات.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* الخدمات اللغوية */}
//                         <div className={`services-tab-content ${activeTab === 'language' ? 'active' : ''}`}>
//                             <div className="services-header animate-on-scroll">
//                                 <div className="services-icon language">
//                                     <FaLanguage />
//                                 </div>
//                                 <div className="services-header-text">
//                                     <h2>الخدمات اللغوية</h2>
//                                     <p>خدمات لغوية متخصصة تلبي احتياجات الطلاب والباحثين</p>
//                                 </div>
//                             </div>
//
//                             <div className="services-list">
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaExchangeAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>الترجمة الأكاديمية المتخصصة</h3>
//                                         <p>ترجمة النصوص والأبحاث الأكاديمية بين اللغتين العربية والإنجليزية بدقة واحترافية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaCheckCircle />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>إعادة الصياغة العلمية</h3>
//                                         <p>إعادة صياغة النصوص العلمية لتجنب التشابه وضمان الأصالة الأكاديمية.</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="service-item animate-on-scroll">
//                                     <div className="service-item-icon">
//                                         <FaPencilAlt />
//                                     </div>
//                                     <div className="service-item-content">
//                                         <h3>التدقيق اللغوي والنحوي</h3>
//                                         <p>تدقيق لغوي ونحوي للنصوص والأبحاث والرسائل العلمية للتأكد من سلامتها اللغوية.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* قسم مميزات الخدمات */}
//             <section className="services-features-section">
//                 <div className="container">
//                     <h2 className="section-title text-center animate-on-scroll">ما يميزنا</h2>
//                     <div className="section-underline center animate-on-scroll"></div>
//                     <p className="section-description text-center animate-on-scroll">
//                         نتميز بتقديم خدماتنا وفق أعلى معايير الجودة والاحترافية
//                     </p>
//
//                     <div className="features-grid">
//                         <div className="feature-card animate-on-scroll">
//                             <h3 className="feature-title">التفوق الأكاديمي</h3>
//                             <p className="feature-description">
//                                 نضمن أعلى مستويات الجودة الأكاديمية مع ضمان الدرجة الكاملة
//                             </p>
//                         </div>
//
//                         <div className="feature-card animate-on-scroll">
//                             <h3 className="feature-title">الأمانة العلمية</h3>
//                             <p className="feature-description">
//                                 جميع أعمالنا أصلية ومبتكرة مع ضمان عدم السرقة العلمية
//                             </p>
//                         </div>
//
//                         <div className="feature-card animate-on-scroll">
//                             <h3 className="feature-title">فريق متخصص</h3>
//                             <p className="feature-description">
//                                 مختصون مؤهلون في جميع التخصصات العلمية والأدبية
//                             </p>
//                         </div>
//
//                         <div className="feature-card animate-on-scroll">
//                             <h3 className="feature-title">السرعة والدقة</h3>
//                             <p className="feature-description">
//                                 التزام تام بالمواعيد المحددة مع أعلى دقة في التنفيذ
//                             </p>
//                         </div>
//
//                         <div className="feature-card animate-on-scroll">
//                             <h3 className="feature-title">أسعار تنافسية</h3>
//                             <p className="feature-description">
//                                 جودة عالية بأسعار تناسب جميع الطلاب
//                             </p>
//                         </div>
//
//                         <div className="feature-card animate-on-scroll">
//                             <h3 className="feature-title">خدمة شاملة</h3>
//                             <p className="feature-description">
//                                 تغطية كاملة لجميع المواد في كافة التخصصات الجامعية
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default Services;

// src/pages/Services.js
import React, { useState, useEffect, useContext } from 'react';
import {
    FaGraduationCap,
    FaUserGraduate,
    FaHeartbeat,
    FaLaptopCode,
    FaLanguage,
    FaClipboardCheck,
    FaBook,
    FaChalkboardTeacher,
    FaLaptop,
    FaPencilAlt,
    FaFileAlt,
    FaFilePowerpoint,
    FaFileContract,
    FaStethoscope,
    FaNotesMedical,
    FaCode,
    FaMobileAlt,
    FaExchangeAlt,
    FaCheckCircle,
    FaRegFileAlt
} from 'react-icons/fa';
import { images } from '../utils/assets';
import '../styles/services.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext

const Services = () => {
    const [activeTab, setActiveTab] = useState('academic');

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

    // Tab change handler
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        // Add dark-mode class when isDarkMode is true
        <div className={`services-page ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Welcome Section */}
            <section className="services-hero-section">
                <div className="services-hero-overlay"></div>
                <div className="container">
                    <div className="services-hero-content">
                        <h1 className="services-hero-title animate-on-scroll">خدماتنا</h1>
                        <div className="services-hero-separator animate-on-scroll"></div>
                        <p className="services-hero-description animate-on-scroll">
                            نقدم مجموعة متنوعة من الخدمات التعليمية والأكاديمية المتخصصة لدعم الطلاب في مختلف المراحل الدراسية
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Main Section */}
            <section className="services-main-section">
                <div className="container">
                    <div className="services-tabs animate-on-scroll">
                        <button
                            className={`services-tab ${activeTab === 'academic' ? 'active' : ''}`}
                            onClick={() => handleTabChange('academic')}
                        >
                            <FaGraduationCap />
                            <span>الخدمات الأكاديمية</span>
                        </button>

                        <button
                            className={`services-tab ${activeTab === 'postgraduate' ? 'active' : ''}`}
                            onClick={() => handleTabChange('postgraduate')}
                        >
                            <FaUserGraduate />
                            <span>الدراسات العليا</span>
                        </button>

                        <button
                            className={`services-tab ${activeTab === 'health' ? 'active' : ''}`}
                            onClick={() => handleTabChange('health')}
                        >
                            <FaHeartbeat />
                            <span>التخصصات الصحية</span>
                        </button>

                        <button
                            className={`services-tab ${activeTab === 'technical' ? 'active' : ''}`}
                            onClick={() => handleTabChange('technical')}
                        >
                            <FaLaptopCode />
                            <span>الخدمات التقنية</span>
                        </button>

                        <button
                            className={`services-tab ${activeTab === 'language' ? 'active' : ''}`}
                            onClick={() => handleTabChange('language')}
                        >
                            <FaLanguage />
                            <span>الخدمات اللغوية</span>
                        </button>
                    </div>

                    <div className="services-content">
                        {/* Academic Services */}
                        <div className={`services-tab-content ${activeTab === 'academic' ? 'active' : ''}`}>
                            <div className="services-header animate-on-scroll">
                                <div className="services-icon academic">
                                    <FaGraduationCap />
                                </div>
                                <div className="services-header-text">
                                    <h2>الخدمات الأكاديمية العامة</h2>
                                    <p>نقدم مجموعة متكاملة من الخدمات الأكاديمية لطلاب المراحل الجامعية</p>
                                </div>
                            </div>

                            <div className="services-list">
                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaClipboardCheck />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>حل الاختبارات والكويزات</h3>
                                        <p>مساعدة في حل الاختبارات والكويزات لجميع التخصصات والجامعات بدقة واحترافية عالية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaBook />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>إنجاز الواجبات</h3>
                                        <p>إنجاز الواجبات الدراسية بدقة واحترافية وفق المعايير الأكاديمية المطلوبة.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaFileAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>إعداد الأبحاث العلمية</h3>
                                        <p>إعداد الأبحاث العلمية باللغتين العربية والإنجليزية مع المراجع الموثوقة وفق المعايير الأكاديمية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaFilePowerpoint />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>تصميم العروض التقديمية</h3>
                                        <p>تصميم عروض الباوربوينت بأعلى مستوى إبداعي ومهني يناسب المتطلبات الأكاديمية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaRegFileAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>كتابة الملخصات والشروحات</h3>
                                        <p>كتابة ملخصات وشروحات للمواد الدراسية بطريقة مبسطة وشاملة تساعد الطلاب على الفهم والاستيعاب.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaChalkboardTeacher />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>المساعدة في المناقشات والأنشطة</h3>
                                        <p>تقديم الدعم في المناقشات والأنشطة الأسبوعية بمحتوى علمي دقيق ومتميز.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Postgraduate Services */}
                        <div className={`services-tab-content ${activeTab === 'postgraduate' ? 'active' : ''}`}>
                            <div className="services-header animate-on-scroll">
                                <div className="services-icon postgraduate">
                                    <FaUserGraduate />
                                </div>
                                <div className="services-header-text">
                                    <h2>خدمات الدراسات العليا</h2>
                                    <p>نقدم خدمات متخصصة لطلاب الدراسات العليا (الماجستير والدكتوراه) بأعلى مستويات الجودة الأكاديمية</p>
                                </div>
                            </div>

                            <div className="services-list">
                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaFileContract />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>مشاريع التخرج</h3>
                                        <p>إعداد وبحث وتطوير وتحليل شامل لمشاريع التخرج، مع المساعدة في اختيار الموضوع المناسب.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaFileAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>إعداد رسائل الماجستير والدكتوراه</h3>
                                        <p>إعداد رسائل الماجستير والدكتوراه وفقاً للمعايير الأكاديمية الصارمة وبمنهجية علمية دقيقة.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaPencilAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>نقد وتحليل الأبحاث العلمية</h3>
                                        <p>تقديم نقد علمي موضوعي وتحليل دقيق للأبحاث العلمية في مختلف التخصصات.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaLaptop />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>تحليل البيانات الأكاديمية</h3>
                                        <p>تحليل البيانات الأكاديمية وإعداد النتائج باستخدام البرامج الإحصائية المتخصصة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Health Services */}
                        <div className={`services-tab-content ${activeTab === 'health' ? 'active' : ''}`}>
                            <div className="services-header animate-on-scroll">
                                <div className="services-icon health">
                                    <FaHeartbeat />
                                </div>
                                <div className="services-header-text">
                                    <h2>خدمات التخصصات الصحية</h2>
                                    <p>خدمات متخصصة للطلاب في المجالات الطبية والصحية بمختلف فروعها</p>
                                </div>
                            </div>

                            <div className="services-list">
                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaStethoscope />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>تحليل دراسات الحالة الطبية</h3>
                                        <p>تحليل دراسات الحالة الطبية وتقديم الحلول العلمية المناسبة بناءً على الأدلة والبراهين الطبية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaNotesMedical />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>إعداد خطط الرعاية التمريضية</h3>
                                        <p>إعداد خطط الرعاية التمريضية الشاملة وفق أحدث المعايير والبروتوكولات العالمية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaFileAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>كتابة التقارير الطبية</h3>
                                        <p>كتابة التقارير الطبية المتكاملة وفق المعايير المهنية والأكاديمية المعتمدة.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaBook />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>إعداد البحوث والمقالات الطبية</h3>
                                        <p>إعداد البحوث والمقالات الطبية المدعومة بالأدلة العلمية والمراجع الطبية الموثوقة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Services */}
                        <div className={`services-tab-content ${activeTab === 'technical' ? 'active' : ''}`}>
                            <div className="services-header animate-on-scroll">
                                <div className="services-icon technical">
                                    <FaLaptopCode />
                                </div>
                                <div className="services-header-text">
                                    <h2>الخدمات التقنية</h2>
                                    <p>خدمات احترافية في مجال تكنولوجيا المعلومات والبرمجة والهندسة</p>
                                </div>
                            </div>

                            <div className="services-list">
                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaCode />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>تنفيذ المشاريع البرمجية</h3>
                                        <p>تنفيذ المشاريع البرمجية وتطبيقات الويب من قبل مطورين متخصصين بخبرة عالية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaMobileAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>تطوير تطبيقات الهواتف الذكية</h3>
                                        <p>تطوير تطبيقات الهواتف الذكية لنظامي Android و iOS وفق أحدث التقنيات والمعايير.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaLaptop />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>تطوير المشاريع التقنية والهندسية</h3>
                                        <p>تطوير المشاريع التقنية والهندسية بقيادة مختصين أكفاء في مختلف المجالات.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Language Services */}
                        <div className={`services-tab-content ${activeTab === 'language' ? 'active' : ''}`}>
                            <div className="services-header animate-on-scroll">
                                <div className="services-icon language">
                                    <FaLanguage />
                                </div>
                                <div className="services-header-text">
                                    <h2>الخدمات اللغوية</h2>
                                    <p>خدمات لغوية متخصصة تلبي احتياجات الطلاب والباحثين</p>
                                </div>
                            </div>

                            <div className="services-list">
                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaExchangeAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>الترجمة الأكاديمية المتخصصة</h3>
                                        <p>ترجمة النصوص والأبحاث الأكاديمية بين اللغتين العربية والإنجليزية بدقة واحترافية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaCheckCircle />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>إعادة الصياغة العلمية</h3>
                                        <p>إعادة صياغة النصوص العلمية لتجنب التشابه وضمان الأصالة الأكاديمية.</p>
                                    </div>
                                </div>

                                <div className="service-item animate-on-scroll">
                                    <div className="service-item-icon">
                                        <FaPencilAlt />
                                    </div>
                                    <div className="service-item-content">
                                        <h3>التدقيق اللغوي والنحوي</h3>
                                        <p>تدقيق لغوي ونحوي للنصوص والأبحاث والرسائل العلمية للتأكد من سلامتها اللغوية.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="services-features-section">
                <div className="container">
                    <h2 className="section-title text-center animate-on-scroll">ما يميزنا</h2>
                    <div className="section-underline center animate-on-scroll"></div>
                    <p className="section-description text-center animate-on-scroll">
                        نتميز بتقديم خدماتنا وفق أعلى معايير الجودة والاحترافية
                    </p>

                    <div className="features-grid">
                        <div className="feature-card animate-on-scroll">
                            <h3 className="feature-title">التفوق الأكاديمي</h3>
                            <p className="feature-description">
                                نضمن أعلى مستويات الجودة الأكاديمية مع ضمان الدرجة الكاملة
                            </p>
                        </div>

                        <div className="feature-card animate-on-scroll">
                            <h3 className="feature-title">الأمانة العلمية</h3>
                            <p className="feature-description">
                                جميع أعمالنا أصلية ومبتكرة مع ضمان عدم السرقة العلمية
                            </p>
                        </div>

                        <div className="feature-card animate-on-scroll">
                            <h3 className="feature-title">فريق متخصص</h3>
                            <p className="feature-description">
                                مختصون مؤهلون في جميع التخصصات العلمية والأدبية
                            </p>
                        </div>

                        <div className="feature-card animate-on-scroll">
                            <h3 className="feature-title">السرعة والدقة</h3>
                            <p className="feature-description">
                                التزام تام بالمواعيد المحددة مع أعلى دقة في التنفيذ
                            </p>
                        </div>

                        <div className="feature-card animate-on-scroll">
                            <h3 className="feature-title">أسعار تنافسية</h3>
                            <p className="feature-description">
                                جودة عالية بأسعار تناسب جميع الطلاب
                            </p>
                        </div>

                        <div className="feature-card animate-on-scroll">
                            <h3 className="feature-title">خدمة شاملة</h3>
                            <p className="feature-description">
                                تغطية كاملة لجميع المواد في كافة التخصصات الجامعية
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;