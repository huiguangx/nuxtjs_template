<script setup>
import Header from "./Header/Header.vue";
import Footer from "./Footer/Footer.vue";
</script>

<template>
  <div>
    <slot name="header">
      <Header></Header>
    </slot>
    <main>
      <slot></slot>
    </main>
    <slot name="footer">
      <Footer></Footer>
    </slot>
  </div>
</template>

<style lang="scss" scoped></style>
