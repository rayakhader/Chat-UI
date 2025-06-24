import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Chat with us!": "Chat with us!",
      "Hi there! How can I help you today?": "Hi there! How can I help you today?",
      "Prompt can't be empty": "Prompt can't be empty",
      "Please ask what you want...": "Please ask what you want...",
      "Send": "Send"
    }
  },
  ar: {
    translation: {
      "Chat with us!": "تحدث معنا!",
      "Hi there! How can I help you today?": "مرحبًا! كيف يمكنني مساعدتك اليوم؟",
      "Prompt can't be empty": "لا يمكن أن يكون الحقل فارغًا",
      "Please ask what you want...": "من فضلك اسأل ما تريد...",
      "Send": "إرسال"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
