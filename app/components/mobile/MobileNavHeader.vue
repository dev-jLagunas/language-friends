<script setup lang="ts"></script>

<template>
  <div
    class="font-yomogi py-4 border-b border-dark-primary/20 dark:border-light-primary/20 md:hidden"
  >
    <section class="">
      <div class="flex-row-around-center gap-4">
        <div class="flex-row-center-center gap-4">
          <LangToggleBtn />
          <ThemeToggleBtn />
        </div>
        <button class="green-cta-btn">
          {{ $t("footer.menu.start") }}
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
