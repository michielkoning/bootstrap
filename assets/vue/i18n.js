import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
};

const browserLang = navigator.language || navigator.userLanguage;
const supportedLangs = ['nl', 'en'];
const userLang = supportedLangs.find(lang => lang === browserLang);

export default new VueI18n({
  locale: userLang || 'en',
  fallbackLocale: userLang || 'en',
  messages: loadLocaleMessages(),
});
