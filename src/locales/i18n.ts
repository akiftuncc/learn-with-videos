import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import tr from "./tr.json";

// Initialize i18n without react-native-localize
i18n.use(initReactI18next).init({
  compatibilityJSON: "v3" as any, // Type assertion to avoid compatibility error
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: "en", // Default to English instead of using device language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
