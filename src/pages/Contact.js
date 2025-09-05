// // src/pages/Contact.js
// import React, { useState, useEffect } from 'react';
// import {
//     FaWhatsapp,
//     FaTelegram,
//     FaPhone,
//     FaEnvelope,
//     FaMapMarkerAlt,
//     FaPaperPlane,
//     FaRegCheckCircle,
//     FaSpinner,
//     FaQuestionCircle
// } from 'react-icons/fa';
// import { images } from '../utils/assets';
// import '../styles/contact.css';
//
// const Contact = () => {
//     // حالة نموذج الاتصال
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//     });
//
//     const [submitStatus, setSubmitStatus] = useState({
//         submitted: false,
//         loading: false,
//         success: false,
//         message: ''
//     });
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
//     // تبديل الأسئلة الشائعة
//     const [activeFaq, setActiveFaq] = useState(null);
//
//     const toggleFaq = (index) => {
//         if (activeFaq === index) {
//             setActiveFaq(null);
//         } else {
//             setActiveFaq(index);
//         }
//     };
//
//     // تغيير قيم النموذج
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     // إرسال النموذج
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitStatus({ ...submitStatus, loading: true });
//
//         // محاكاة إرسال النموذج
//         setTimeout(() => {
//             setSubmitStatus({
//                 submitted: true,
//                 loading: false,
//                 success: true,
//                 message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.'
//             });
//
//             // إعادة تعيين النموذج
//             setFormData({
//                 name: '',
//                 email: '',
//                 phone: '',
//                 subject: '',
//                 message: ''
//             });
//
//             // إخفاء رسالة النجاح بعد 5 ثوانٍ
//             setTimeout(() => {
//                 setSubmitStatus({
//                     submitted: false,
//                     loading: false,
//                     success: false,
//                     message: ''
//                 });
//             }, 5000);
//         }, 1500);
//     };
//
//     // قائمة الأسئلة الشائعة
//     const faqs = [
//         {
//             question: 'كيف يمكنني طلب خدمة من منصة ثقة؟',
//             answer: 'يمكنك طلب أي خدمة من خلال التواصل معنا عبر نموذج الاتصال في موقعنا، أو مراسلتنا مباشرة عبر واتساب أو تليجرام، وسيتم الرد عليك في أقرب وقت ممكن.'
//         },
//         {
//             question: 'ما هي مدة تنفيذ الطلبات؟',
//             answer: 'تختلف مدة التنفيذ حسب نوع الخدمة وحجم العمل المطلوب. نلتزم دائماً بالمواعيد المتفق عليها مسبقاً مع العميل، ونسعى لإنجاز جميع الطلبات في أسرع وقت ممكن مع الحفاظ على الجودة العالية.'
//         },
//         {
//             question: 'هل تضمنون السرية التامة للمعلومات؟',
//             answer: 'نعم، نضمن السرية التامة لجميع المعلومات والبيانات الخاصة بعملائنا، ولا نشارك أي معلومات مع أي طرف ثالث، كما نلتزم بأعلى معايير الخصوصية والأمان.'
//         },
//         {
//             question: 'هل يمكنني طلب تعديلات على العمل المنجز؟',
//             answer: 'بالتأكيد، نحن نقدم خدمة التعديل المجاني على الأعمال المنجزة حتى يتم الوصول إلى النتيجة المرضية تماماً للعميل، ونستقبل جميع الملاحظات والاقتراحات بصدر رحب.'
//         },
//         {
//             question: 'كيف يتم الدفع مقابل الخدمات؟',
//             answer: 'نوفر طرق دفع متعددة ومرنة، ويتم الاتفاق على طريقة الدفع وموعده مع العميل بشكل مباشر. يمكن الدفع كاملاً مقدماً أو على دفعات حسب طبيعة العمل المطلوب.'
//         },
//         {
//             question: 'هل تقدمون خدمات للجامعات العالمية؟',
//             answer: 'نعم، نقدم خدماتنا للطلاب في مختلف الجامعات العربية والعالمية، ولدينا خبرة واسعة في التعامل مع متطلبات مختلف الأنظمة التعليمية حول العالم.'
//         }
//     ];
//
//     return (
//         <div className="contact-page">
//             {/* قسم الترحيب */}
//             <section className="contact-hero-section">
//                 <div className="contact-hero-overlay"></div>
//                 <div className="container">
//                     <div className="contact-hero-content">
//                         <h1 className="contact-hero-title animate-on-scroll">تواصل معنا</h1>
//                         <div className="contact-hero-separator animate-on-scroll"></div>
//                         <p className="contact-hero-description animate-on-scroll">
//                             نحن هنا للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه
//                         </p>
//                     </div>
//                 </div>
//             </section>
//
//             {/* قسم معلومات الاتصال */}
//             <section className="contact-info-section">
//                 <div className="container">
//                     <div className="contact-info-container">
//                         <div className="contact-info-text animate-on-scroll">
//                             <h2 className="section-title">معلومات الاتصال</h2>
//                             <div className="section-underline"></div>
//                             <p className="contact-info-description">
//                                 يمكنك التواصل معنا من خلال أي من وسائل الاتصال التالية، وسنكون سعداء بالرد على استفساراتك في أقرب وقت ممكن.
//                             </p>
//
//                             <div className="contact-details">
//                                 <div className="contact-detail-item">
//                                     <div className="contact-detail-icon">
//                                         <FaPhone />
//                                     </div>
//                                     <div className="contact-detail-content">
//                                         <h3>اتصل بنا</h3>
//                                         <p>+966 123 456 789</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="contact-detail-item">
//                                     <div className="contact-detail-icon">
//                                         <FaEnvelope />
//                                     </div>
//                                     <div className="contact-detail-content">
//                                         <h3>البريد الإلكتروني</h3>
//                                         <p>info@thiqah.com</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="contact-detail-item">
//                                     <div className="contact-detail-icon">
//                                         <FaMapMarkerAlt />
//                                     </div>
//                                     <div className="contact-detail-content">
//                                         <h3>العنوان</h3>
//                                         <p>المملكة العربية السعودية</p>
//                                     </div>
//                                 </div>
//                             </div>
//
//                             <div className="social-contact-buttons">
//                                 <a href="https://wa.me/1234567890" className="social-contact-button whatsapp">
//                                     <FaWhatsapp />
//                                     <span>تواصل عبر واتساب</span>
//                                 </a>
//
//                                 <a href="https://t.me/username" className="social-contact-button telegram">
//                                     <FaTelegram />
//                                     <span>تواصل عبر تليجرام</span>
//                                 </a>
//                             </div>
//                         </div>
//
//                         <div className="contact-info-image animate-on-scroll">
//                             <img src={images.contactImage} alt="تواصل مع منصة ثقة" />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* قسم نموذج الاتصال */}
//             <section className="contact-form-section">
//                 <div className="container">
//                     <div className="contact-form-container">
//                         <div className="contact-form-header animate-on-scroll">
//                             <h2 className="section-title">أرسل رسالة</h2>
//                             <div className="section-underline"></div>
//                             <p className="contact-form-description">
//                                 يمكنك إرسال استفسارك أو طلبك من خلال النموذج التالي، وسنقوم بالرد عليك في أقرب وقت ممكن.
//                             </p>
//                         </div>
//
//                         <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <label htmlFor="name">الاسم</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     placeholder="أدخل اسمك الكامل"
//                                     required
//                                 />
//                             </div>
//
//                             <div className="form-row">
//                                 <div className="form-group">
//                                     <label htmlFor="email">البريد الإلكتروني</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         placeholder="أدخل بريدك الإلكتروني"
//                                         required
//                                     />
//                                 </div>
//
//                                 <div className="form-group">
//                                     <label htmlFor="phone">رقم الهاتف</label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         value={formData.phone}
//                                         onChange={handleInputChange}
//                                         placeholder="أدخل رقم هاتفك"
//                                     />
//                                 </div>
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="subject">الموضوع</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formData.subject}
//                                     onChange={handleInputChange}
//                                     placeholder="أدخل موضوع الرسالة"
//                                     required
//                                 />
//                             </div>
//
//                             <div className="form-group">
//                                 <label htmlFor="message">الرسالة</label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     value={formData.message}
//                                     onChange={handleInputChange}
//                                     placeholder="اكتب رسالتك هنا"
//                                     rows="5"
//                                     required
//                                 ></textarea>
//                             </div>
//
//                             <button type="submit" className="submit-button" disabled={submitStatus.loading}>
//                                 {submitStatus.loading ? (
//                                     <>
//                                         <FaSpinner className="spin" />
//                                         <span>جاري الإرسال...</span>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <FaPaperPlane />
//                                         <span>إرسال الرسالة</span>
//                                     </>
//                                 )}
//                             </button>
//
//                             {submitStatus.submitted && (
//                                 <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
//                                     <FaRegCheckCircle />
//                                     <span>{submitStatus.message}</span>
//                                 </div>
//                             )}
//                         </form>
//                     </div>
//                 </div>
//             </section>
//
//             {/* قسم الأسئلة الشائعة */}
//             <section className="faq-section">
//                 <div className="container">
//                     <div className="faq-header animate-on-scroll">
//                         <h2 className="section-title text-center">الأسئلة الشائعة</h2>
//                         <div className="section-underline center"></div>
//                         <p className="section-description text-center">
//                             إليك إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
//                         </p>
//                     </div>
//
//                     <div className="faq-list">
//                         {faqs.map((faq, index) => (
//                             <div className="faq-item animate-on-scroll" key={index}>
//                                 <div className="faq-question" onClick={() => toggleFaq(index)}>
//                                     <h3>{faq.question}</h3>
//                                     <span className={`faq-icon ${activeFaq === index ? 'active' : ''}`}>
//                     <FaQuestionCircle />
//                   </span>
//                                 </div>
//                                 <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
//                                     <p>{faq.answer}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };
//
// export default Contact;

// src/pages/Contact.js
import React, { useState, useEffect, useContext } from 'react';
import {
    FaWhatsapp,
    FaTelegram,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaRegCheckCircle,
    FaSpinner,
    FaQuestionCircle
} from 'react-icons/fa';
import { images } from '../utils/assets';
import '../styles/contact.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext

const Contact = () => {
    // Get dark mode state from context
    const { isDarkMode } = useContext(ThemeContext);

    // Contact form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        loading: false,
        success: false,
        message: ''
    });

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

    // Toggle FAQ
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    // Form input change handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitStatus({ ...submitStatus, loading: true });

        // Form submission simulation
        setTimeout(() => {
            setSubmitStatus({
                submitted: true,
                loading: false,
                success: true,
                message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({
                    submitted: false,
                    loading: false,
                    success: false,
                    message: ''
                });
            }, 5000);
        }, 1500);
    };

    // FAQ list
    const faqs = [
        {
            question: 'كيف يمكنني طلب خدمة من منصة ثقة؟',
            answer: 'يمكنك طلب أي خدمة من خلال التواصل معنا عبر نموذج الاتصال في موقعنا، أو مراسلتنا مباشرة عبر واتساب أو تليجرام، وسيتم الرد عليك في أقرب وقت ممكن.'
        },
        {
            question: 'ما هي مدة تنفيذ الطلبات؟',
            answer: 'تختلف مدة التنفيذ حسب نوع الخدمة وحجم العمل المطلوب. نلتزم دائماً بالمواعيد المتفق عليها مسبقاً مع العميل، ونسعى لإنجاز جميع الطلبات في أسرع وقت ممكن مع الحفاظ على الجودة العالية.'
        },
        {
            question: 'هل تضمنون السرية التامة للمعلومات؟',
            answer: 'نعم، نضمن السرية التامة لجميع المعلومات والبيانات الخاصة بعملائنا، ولا نشارك أي معلومات مع أي طرف ثالث، كما نلتزم بأعلى معايير الخصوصية والأمان.'
        },
        {
            question: 'هل يمكنني طلب تعديلات على العمل المنجز؟',
            answer: 'بالتأكيد، نحن نقدم خدمة التعديل المجاني على الأعمال المنجزة حتى يتم الوصول إلى النتيجة المرضية تماماً للعميل، ونستقبل جميع الملاحظات والاقتراحات بصدر رحب.'
        },
        {
            question: 'كيف يتم الدفع مقابل الخدمات؟',
            answer: 'نوفر طرق دفع متعددة ومرنة، ويتم الاتفاق على طريقة الدفع وموعده مع العميل بشكل مباشر. يمكن الدفع كاملاً مقدماً أو على دفعات حسب طبيعة العمل المطلوب.'
        },
        {
            question: 'هل تقدمون خدمات للجامعات العالمية؟',
            answer: 'نعم، نقدم خدماتنا للطلاب في مختلف الجامعات العربية والعالمية، ولدينا خبرة واسعة في التعامل مع متطلبات مختلف الأنظمة التعليمية حول العالم.'
        }
    ];

    return (
        // Add dark-mode class when isDarkMode is true
        <div className={`contact-page ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Welcome Section */}
            <section className="contact-hero-section">
                <div className="contact-hero-overlay"></div>
                <div className="container">
                    <div className="contact-hero-content">
                        <h1 className="contact-hero-title animate-on-scroll">تواصل معنا</h1>
                        <div className="contact-hero-separator animate-on-scroll"></div>
                        <p className="contact-hero-description animate-on-scroll">
                            نحن هنا للإجابة على استفساراتك وتقديم الدعم الذي تحتاجه
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-container">
                        <div className="contact-info-text animate-on-scroll">
                            <h2 className="section-title">معلومات الاتصال</h2>
                            <div className="section-underline"></div>
                            <p className="contact-info-description">
                                يمكنك التواصل معنا من خلال أي من وسائل الاتصال التالية، وسنكون سعداء بالرد على استفساراتك في أقرب وقت ممكن.
                            </p>

                            <div className="contact-details">
                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaPhone />
                                    </div>
                                    <div className="contact-detail-content">
                                        <h3>اتصل بنا</h3>
                                        <p>+966 123 456 789</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="contact-detail-content">
                                        <h3>البريد الإلكتروني</h3>
                                        <p>info@thiqah.com</p>
                                    </div>
                                </div>

                                <div className="contact-detail-item">
                                    <div className="contact-detail-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="contact-detail-content">
                                        <h3>العنوان</h3>
                                        <p>المملكة العربية السعودية</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-contact-buttons">
                                <a href="https://wa.me/1234567890" className="social-contact-button whatsapp">
                                    <FaWhatsapp />
                                    <span>تواصل عبر واتساب</span>
                                </a>

                                <a href="https://t.me/username" className="social-contact-button telegram">
                                    <FaTelegram />
                                    <span>تواصل عبر تليجرام</span>
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-image animate-on-scroll">
                            <img src={images.contactImage} alt="تواصل مع منصة ثقة" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-form-container">
                        <div className="contact-form-header animate-on-scroll">
                            <h2 className="section-title">أرسل رسالة</h2>
                            <div className="section-underline"></div>
                            <p className="contact-form-description">
                                يمكنك إرسال استفسارك أو طلبك من خلال النموذج التالي، وسنقوم بالرد عليك في أقرب وقت ممكن.
                            </p>
                        </div>

                        <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">الاسم</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="أدخل اسمك الكامل"
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="أدخل بريدك الإلكتروني"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">رقم الهاتف</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="أدخل رقم هاتفك"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">الموضوع</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="أدخل موضوع الرسالة"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">الرسالة</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="اكتب رسالتك هنا"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button" disabled={submitStatus.loading}>
                                {submitStatus.loading ? (
                                    <>
                                        <FaSpinner className="spin" />
                                        <span>جاري الإرسال...</span>
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        <span>إرسال الرسالة</span>
                                    </>
                                )}
                            </button>

                            {submitStatus.submitted && (
                                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                                    <FaRegCheckCircle />
                                    <span>{submitStatus.message}</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="faq-header animate-on-scroll">
                        <h2 className="section-title text-center">الأسئلة الشائعة</h2>
                        <div className="section-underline center"></div>
                        <p className="section-description text-center">
                            إليك إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
                        </p>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div className="faq-item animate-on-scroll" key={index}>
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <h3>{faq.question}</h3>
                                    <span className={`faq-icon ${activeFaq === index ? 'active' : ''}`}>
                                        <FaQuestionCircle />
                                    </span>
                                </div>
                                <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;