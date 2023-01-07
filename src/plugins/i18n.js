import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ar: {
    message: {
      hello: 'مرحباً أيها العالم'
    }
  }
}

const i18n = createI18n({
  locale: 'ar',
  messages,
})

export default i18n
