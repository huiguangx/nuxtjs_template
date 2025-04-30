<template>
  <div class="w-[90%] mx-auto">
    <header
      class="static top-0 h-14 shadow-md dark:shadow-white-500/50 backdrop-blur dark:bg-transparent transition-all py-3"
    >
      <nav class="flex gap-4 justify-between items-center">
        <!-- 左侧 logo -->
        <Icon class="w-8 h-8" name="si:apple-fill" />
        <!-- 右侧 社交图标 -->

        <Icon class="w-8 h-8" name="si:apple-fill" />
      </nav>
    </header>
  </div>
</template>

<style scoped>
.dark header {
  box-shadow:
    0 4px 6px -1px rgb(255 255 255 / 0.1),
    0 2px 4px -2px rgb(255 255 255 / 0.1);
}
</style>
