import Vue from 'vue';
import i18n from '@/i18n';
import App from './app.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app');
