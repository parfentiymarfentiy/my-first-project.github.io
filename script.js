// Language management
const translations = {
    ru: {
        brand: "HarborVPN",
        features: "Возможности",
        pricing: "Тарифы",
        faq: "FAQ",
        help: "Помощь",
        telegram_bot: "Telegram бот",
        login: "Войти",
        register: "Регистрация",
        logout: "Выйти",
        hero_title: "Ваша приватность - наш приоритет",
        hero_subtitle: "HarborVPN обеспечивает безопасное и анонимное подключение к интернету с максимальной скоростью",
        get_started: "Начать сейчас",
        learn_more: "Узнать больше",
        why_choose: "Почему выбирают HarborVPN",
        feature1_title: "Высокая скорость",
        feature1_desc: "Наслаждайтесь потоковой передачей и играми без задержек",
        feature2_title: "Безопасность",
        feature2_desc: "Военное шифрование для защиты ваших данных",
        feature3_title: "Глобальный доступ",
        feature3_desc: "Доступ к контенту по всему миру без ограничений",
        choose_plan: "Выберите свой тариф",
        basic: "Базовый",
        premium: "Премиум",
        month: "/месяц",
        choose: "Выбрать",
        popular: "Популярный",
        faq1_question: "Что такое VPN?",
        faq1_answer: "VPN создает безопасное соединение между вашим устройством и интернетом.",
        faq2_question: "Как начать использовать?",
        faq2_answer: "Зарегистрируйтесь, выберите тариф и скачайте приложение.",
        help_text: "Если у вас возникли проблемы, обратитесь в нашу поддержку через Telegram бота.",
        contact_support: "Связаться с поддержкой",
        links: "Ссылки",
        support: "Поддержка",
        rights: "Все права защищены.",
        email: "Email",
        password: "Пароль",
        name: "Имя",
        confirm_password: "Подтвердите пароль",
        no_account: "Нет аккаунта?",
        have_account: "Уже есть аккаунт?",
        back_to_main: "← Вернуться на главную"
    },
    uk: {
        brand: "HarborVPN",
        features: "Можливості",
        pricing: "Тарифи",
        faq: "FAQ",
        help: "Допомога",
        telegram_bot: "Telegram бот",
        login: "Увійти",
        register: "Реєстрація",
        logout: "Вийти",
        hero_title: "Ваша приватність - наш пріоритет",
        hero_subtitle: "HarborVPN забезпечує безпечне та анонімне підключення до інтернету з максимальною швидкістю",
        get_started: "Почати зараз",
        learn_more: "Дізнатися більше",
        why_choose: "Чому обирають HarborVPN",
        feature1_title: "Висока швидкість",
        feature1_desc: "Насолоджуйтесь потоковою передачею та іграми без затримок",
        feature2_title: "Безпека",
        feature2_desc: "Військове шифрування для захисту ваших даних",
        feature3_title: "Глобальний доступ",
        feature3_desc: "Доступ до контенту по всьому світу без обмежень",
        choose_plan: "Оберіть свій тариф",
        basic: "Базовий",
        premium: "Преміум",
        month: "/місяць",
        choose: "Обрати",
        popular: "Популярний",
        faq1_question: "Що таке VPN?",
        faq1_answer: "VPN створює безпечне з'єднання між вашим пристроєм та інтернетом.",
        faq2_question: "Як почати використовувати?",
        faq2_answer: "Зареєструйтесь, оберіть тариф і завантажте додаток.",
        help_text: "Якщо у вас виникли проблеми, зверніться до нашої підтримки через Telegram бота.",
        contact_support: "Зв'язатися з підтримкою",
        links: "Посилання",
        support: "Підтримка",
        rights: "Всі права захищені.",
        email: "Email",
        password: "Пароль",
        name: "Ім'я",
        confirm_password: "Підтвердіть пароль",
        no_account: "Немає акаунта?",
        have_account: "Вже є акаунт?",
        back_to_main: "← Повернутися на головну"
    },
    en: {
        brand: "HarborVPN",
        features: "Features",
        pricing: "Pricing",
        faq: "FAQ",
        help: "Help",
        telegram_bot: "Telegram Bot",
        login: "Login",
        register: "Register",
        logout: "Logout",
        hero_title: "Your Privacy is Our Priority",
        hero_subtitle: "HarborVPN provides secure and anonymous internet connection with maximum speed",
        get_started: "Get Started",
        learn_more: "Learn More",
        why_choose: "Why Choose HarborVPN",
        feature1_title: "High Speed",
        feature1_desc: "Enjoy streaming and gaming without delays",
        feature2_title: "Security",
        feature2_desc: "Military-grade encryption to protect your data",
        feature3_title: "Global Access",
        feature3_desc: "Access content worldwide without restrictions",
        choose_plan: "Choose Your Plan",
        basic: "Basic",
        premium: "Premium",
        month: "/month",
        choose: "Choose",
        popular: "Popular",
        faq1_question: "What is VPN?",
        faq1_answer: "VPN creates a secure connection between your device and the internet.",
        faq2_question: "How to start using?",
        faq2_answer: "Register, choose a plan and download the app.",
        help_text: "If you have any issues, contact our support through the Telegram bot.",
        contact_support: "Contact Support",
        links: "Links",
        support: "Support",
        rights: "All rights reserved.",
        email: "Email",
        password: "Password",
        name: "Name",
        confirm_password: "Confirm Password",
        no_account: "No account?",
        have_account: "Already have an account?",
        back_to_main: "← Back to main"
    }
};

// Function to select language on index page
function selectLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    window.location.href = 'main.html';
}

// Function to change language on main pages
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyTranslations(lang);
    document.documentElement.lang = lang;
}

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Initialize language when page loads
function initLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
    
    // Set language selector value
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    
    // Apply translations
    applyTranslations(savedLanguage);
    document.documentElement.lang = savedLanguage;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    if (document.querySelector('[data-translate]')) {
        initLanguage();
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header && window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else if (header) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});