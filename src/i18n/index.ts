import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./en.json";
import esJSON from "./es.json";

const resources = {
  en: {
    translation: enJSON
  },
  es: {
    translation: esJSON
  }
};

export default i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources,
  keySeparator: ".", // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});
