import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLanguage from '../public/locales/en.json';
import viLanguage from '../public/locales/vi.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: enLanguage },
            vi: { translation: viLanguage },
        },
    });

export default i18n;
