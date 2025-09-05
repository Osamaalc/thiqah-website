// src/data/homeData.js
import {
    FaGraduationCap,
    FaUserGraduate,
    FaHeartbeat,
    FaLaptopCode,
    FaLanguage,
    FaRobot
} from 'react-icons/fa';

/**
 * بيانات الخدمات
 */
export const servicesData = [
    {
        id: 'academic',
        icon: FaGraduationCap,
        iconClass: 'academic',
        title: 'الخدمات الأكاديمية العامة',
        description: 'حل الاختبارات والكويزات، إنجاز الواجبات، إعداد الأبحاث العلمية، وتصميم العروض التقديمية.',
        link: '/services/academic'
    },
    {
        id: 'postgraduate',
        icon: FaUserGraduate,
        iconClass: 'postgraduate',
        title: 'خدمات الدراسات العليا',
        description: 'مشاريع التخرج، إعداد رسائل الماجستير والدكتوراه، نقد وتحليل الأبحاث العلمية.',
        link: '/services/postgraduate'
    },
    {
        id: 'health',
        icon: FaHeartbeat,
        iconClass: 'health',
        title: 'خدمات التخصصات الصحية',
        description: 'تحليل دراسات الحالة الطبية، إعداد خطط الرعاية التمريضية، كتابة التقارير الطبية.',
        link: '/services/health'
    },
    {
        id: 'technical',
        icon: FaLaptopCode,
        iconClass: 'technical',
        title: 'الخدمات التقنية',
        description: 'تنفيذ المشاريع البرمجية، تطوير تطبيقات الويب، والمشاريع التقنية والهندسية.',
        link: '/services/technical'
    },
    {
        id: 'language',
        icon: FaLanguage,
        iconClass: 'language',
        title: 'الخدمات اللغوية',
        description: 'الترجمة الأكاديمية المتخصصة، إعادة الصياغة العلمية، والتدقيق اللغوي والنحوي.',
        link: '/services/language'
    },
    {
        id: 'ai',
        icon: FaRobot,
        iconClass: 'ai',
        title: 'خدمات الذكاء الاصطناعي',
        description: 'تطوير نماذج الذكاء الاصطناعي، تحليل البيانات الذكي، أتمتة العمليات، وبناء حلول تقنية متقدمة.',
        link: '/services/ai'
    }
];

/**
 * بيانات الميزات
 */
export const featuresData = [
    {
        id: '01',
        bgClass: 'feature-bg-1',
        title: 'التفوق الأكاديمي',
        description: 'نضمن أعلى مستويات الجودة الأكاديمية مع ضمان الدرجة الكاملة',
        icon: '🎓'
    },
    {
        id: '02',
        bgClass: 'feature-bg-2',
        title: 'الأمانة العلمية',
        description: 'جميع أعمالنا أصلية ومبتكرة مع ضمان عدم السرقة العلمية',
        icon: '🔒'
    },
    {
        id: '03',
        bgClass: 'feature-bg-3',
        title: 'فريق متخصص',
        description: 'مختصون مؤهلون في جميع التخصصات العلمية والأدبية',
        icon: '👥'
    },
    {
        id: '04',
        bgClass: 'feature-bg-4',
        title: 'السرعة والدقة',
        description: 'التزام تام بالمواعيد المحددة مع أعلى دقة في التنفيذ',
        icon: '⚡'
    },
    {
        id: '05',
        bgClass: 'feature-bg-5',
        title: 'أسعار تنافسية',
        description: 'جودة عالية بأسعار تناسب جميع الطلاب',
        icon: '💰'
    },
    {
        id: '06',
        bgClass: 'feature-bg-6',
        title: 'خدمة شاملة',
        description: 'تغطية كاملة لجميع المواد في كافة التخصصات الجامعية',
        icon: '🌐'
    },
    {
        id: 'AI',
        bgClass: 'feature-bg-7',
        title: 'تقنيات الذكاء الاصطناعي',
        description: 'نستخدم أحدث تقنيات الذكاء الاصطناعي لتطوير حلول مبتكرة وذكية',
        icon: '🤖'
    }
];

/**
 * نصوص القسم حول المنصة
 */
export const aboutContent = {
    tag: 'عن المنصة',
    title: 'من نحن',
    paragraphs: [
        `منصة ثقة هي منصة تعليمية أكاديمية متخصصة في تقديم حلول تعليمية متكاملة باحترافية عالية، 
        تدعم الطالب في جميع المراحل الدراسية والتخصصات من خلال فريق مؤهل من المعلمين والباحثين ذوي الخبرة 
        والدرجات العلمية المتقدمة. نواكب التطور التقني بتقديم حلول الذكاء الاصطناعي المبتكرة لخدمة التعليم والبحث العلمي.`,

        `نتميز بالدقة والجودة والالتزام بالمعايير الأكاديمية مع ضمان السرية والموثوقية في جميع الخدمات. 
        في منصة ثقة، نؤمن بأن لكل طالب طموح الحق في الحصول على دعم تعليمي موثوق، لذلك نسعى لتبسيط 
        العملية التعليمية وتعزيز فرص التفوق والنجاح.`
    ]
};

/**
 * نصوص القسم الرئيسي
 */
export const heroContent = {
    title: {
        parts: ['منصة', 'ثقة', 'التعليمية'],
        highlight: 1 // فهرس الكلمة المميزة
    },
    subtitle: 'حلول تعليمية متكاملة باحترافية عالية',
    buttons: [
        {
            text: 'تواصل معنا',
            link: '/contact',
            type: 'primary'
        },
        {
            text: 'خدماتنا',
            link: '/services',
            type: 'secondary'
        }
    ]
};

/**
 * معلومات التواصل
 */
export const contactInfo = {
    whatsapp: {
        number: '1234567890',
        url: 'https://wa.me/1234567890',
        text: 'تواصل عبر واتساب'
    },
    telegram: {
        username: 'username',
        url: 'https://t.me/username',
        text: 'تواصل عبر تيليجرام'
    }
};

/**
 * نصوص دعوة للعمل
 */
export const ctaContent = {
    title: 'هل تحتاج إلى مساعدة في دراستك؟',
    description: 'تواصل معنا الآن للحصول على الدعم الأكاديمي الذي تحتاجه'
};