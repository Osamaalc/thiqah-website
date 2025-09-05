// src/utils/assets.js
// هذا الملف يساعد في إدارة الأصول والصور من مصادر خارجية

export const images = {
    // صور الخلفيات
    heroBg: "https://images.unsplash.com/photo-1613896527026-f195d476cf8e?q=80&w=1920&auto=format&fit=crop",
    aboutImage: "https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg",

    // صور الخدمات (اختيارية)
    academicService: "https://img.freepik.com/free-vector/training-concept-illustration_114360-6426.jpg",
    postgraduateService: "https://img.freepik.com/free-vector/graduates-concept-illustration_114360-10284.jpg",
    healthService: "https://img.freepik.com/free-vector/medical-healthcare-protection-shield-with-cross-symbol-design_1017-33608.jpg",
    technicalService: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
    languageService: "https://img.freepik.com/free-vector/gradient-international-mother-language-day-illustration_23-2149206280.jpg",

    // صور أخرى
    contactImage: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg",
};

// يمكن إضافة أي أصول أخرى هنا
export const placeholderAvatar = "https://via.placeholder.com/150";

// روابط التواصل
export const contactLinks = {
    whatsapp: "https://wa.me/1234567890",
    telegram: "https://t.me/username",
    email: "info@thiqah.com",
    phone: "+966 123 456 789",
    location: "المملكة العربية السعودية"
};

// بيانات الشركة
export const companyInfo = {
    name: "منصة ثقة التعليمية",
    slogan: "حلول تعليمية متكاملة باحترافية عالية",
    foundedYear: 2020,
    vision: "أن نكون المنصة الرائدة في تقديم الخدمات الأكاديمية المتخصصة، ونساهم في بناء جيل متميز من الطلاب المبدعين والباحثين المتفوقين",
    mission: "تقديم حلول أكاديمية مبتكرة وموثوقة تساعد الطلاب على تحقيق أهدافهم التعليمية بأعلى مستوى من الجودة والمهنية، مع الحفاظ على الأمانة العلمية والنزاهة الأكاديمية"
};

// بيانات التواصل الاجتماعي
export const socialMedia = {
    facebook: "https://facebook.com/thiqah",
    twitter: "https://twitter.com/thiqah",
    instagram: "https://instagram.com/thiqah",
    linkedin: "https://linkedin.com/company/thiqah"
};

// استخدام هذا الملف في أي مكون:
// import { images, contactLinks, companyInfo, socialMedia } from '../utils/assets';
// ثم استخدام البيانات: images.heroBg, contactLinks.whatsapp, etc.