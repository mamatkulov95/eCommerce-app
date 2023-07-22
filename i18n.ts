import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEN from "./public/locales/en/common.json";
import commonTR from "./public/locales/tr/common.json";

const resources = {
  en: {
    common: commonEN,
  },
  tr: {
    common: commonTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "tr",
});

export default i18n;
