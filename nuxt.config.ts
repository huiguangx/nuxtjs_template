// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  // 构建时启动类型检查
  // typescript: {
  //   typeCheck: true,
  // },
});
