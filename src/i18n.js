import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

// Resources for different languages
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

// Determine initial language
const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.split('-')[0];
const initialLanguage = savedLanguage || (browserLanguage === 'en' ? 'en' : 'ar');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Set direction based on language
const setDirection = (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = dir;
  document.documentElement.lang = lng;
  
  // Update HTML direction attribute
  document.documentElement.setAttribute('dir', dir);
  
  // Add/remove RTL class for styling
  if (dir === 'rtl') {
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.classList.remove('rtl');
  }
};

// Set initial direction
setDirection(initialLanguage);

// Listen for language changes
i18n.on('languageChanged', setDirection);

export default i18n;