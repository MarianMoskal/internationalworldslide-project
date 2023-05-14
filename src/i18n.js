import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { ua, en, ru } from './db/translations';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  ua: { ...ua },
  en: { ...en },
  ru: { ...ru },
};

i18n
  // .use(LanguageDetector)
  .use(Backend)
  // .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    //lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    fallbackLng: ['ua', 'en', 'ru'],
    // debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys
    saveMissing: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
