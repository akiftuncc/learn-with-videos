import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

import en from "./en.json";
import tr from "./tr.json";

// Get device language
const deviceLanguage = RNLocalize.getLocales()[0]?.languageCode || "en";

// Initialize i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: "v3" as any, // Type assertion to avoid compatibility error
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: deviceLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
