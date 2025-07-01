<template>
  <div class="w-[90%] mx-auto">
    <section class="w-full bg-red-200 h-screen flex justify-center items-center">
      <div class="text-center font-bold text-lg text-primary">
        {{ $t('login.welcome_back') }}
      </div>
      我

      <!-- 加个按钮切换语言 -->
      <button @click="changeLanguage('zh-cn')">中文</button>
      <button @click="changeLanguage('en')">English</button>
    </section>
  </div>
</template>
<script setup>
const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
}
</script>
<style scoped></style>
