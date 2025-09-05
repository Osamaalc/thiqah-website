// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// إنشاء السياق
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // تحقق من الوضع المحفوظ أو استخدام تفضيلات المستخدم
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            return savedTheme;
        }

        // التحقق من تفضيلات المستخدم في نظام التشغيل
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // تحديث سمة الوثيقة عند تغيير الثيم
    useEffect(() => {
        // تحديث السمة في الـ DOM
        document.documentElement.setAttribute('data-theme', theme);

        // حفظ في التخزين المحلي
        localStorage.setItem('theme', theme);
    }, [theme]);

    // الاستماع لتغييرات تفضيلات النظام
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            // تحديث الثيم فقط إذا لم يكن المستخدم قد اختار ثيمًا صراحةً
            if (!localStorage.getItem('theme')) {
                setTheme(mediaQuery.matches ? 'dark' : 'light');
            }
        };

        // إضافة مستمع للتغييرات
        mediaQuery.addEventListener('change', handleChange);

        // إزالة المستمع عند تفكيك المكون
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // تبديل الثيم
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // ضبط الثيم
    const setThemeExplicitly = (newTheme) => {
        setTheme(newTheme);
    };

    // القيم التي سيتم توفيرها للمكونات
    const value = {
        theme,
        isDarkMode: theme === 'dark',
        toggleTheme,
        setTheme: setThemeExplicitly
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;