"use client"; // ✅ VERY IMPORTANT

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import mr from "./locales/mr.json";
import en from "./locales/en.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      mr: { translation: mr },
      en: { translation: en }
    },
    lng: "mr",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });
}

export default i18n;
