// https://nuxt.com/docs/api/configuration/nuxt-config
import { currentLocales } from './i18n/i18n'
import path from 'path'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n'],
  // 构建时启动类型检查
  // typescript: {
  //   typeCheck: true,
  // },
  i18n: {
    locales: currentLocales,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: path.resolve(__dirname, './i18n/i18n.config.ts'),
    // 启用浏览器语言检测，以便在访问者第一次访问您的站点时自动将其重定向到首选语言环境。
    detectBrowserLanguage: {
      // 启动 cookie
      useCookie: true,
      // 用于存储当前语言环境的变量名
      cookieKey: 'i18n_redirected',
      // (建议用于改进SEO) -仅检测站点根路径(/)上的浏览器区域设置。只有当使用策略而不是“no_prefix”时才有效。
      redirectOn: 'root',
    },
  },
})
