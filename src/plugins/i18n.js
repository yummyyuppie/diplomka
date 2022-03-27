import Vue from "vue";
import VueI18n from 'vue-i18n'
import ru from '@/lang/ru'
import kz from '@/lang/kz'
Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru, kz
  }
})