<script setup lang="ts">
const { locales } = useI18n();
</script>

<template>
  <div
    class="py-3 border-b border-dashed border-dark-primary px-2 font-yomogi dark:border-light-primary"
  >
    <p class="text-2xl mx-auto text-center font-bold">The Language Friends</p>
    <p class="text-center text-sm text-wrap">
      {{ $t("navbar.tagline") }}
    </p>
  </div>
</template>

<style scoped></style>
