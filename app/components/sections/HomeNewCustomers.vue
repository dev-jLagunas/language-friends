<script setup lang="ts">
const { locale } = useI18n();
let intervalId: number;

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);
</script>

<template>
  <section class="pb-50">
    <header>
      <h2
        :class="heroTitleFont"
        class="text-2xl text-dark-primary dark:text-light-primary text-center border-2 mx-auto border-dashed border-dark-primary dark:border-light-primary w-fit px-8 py-1"
      >
        {{ $t("firstTime.title") }}
      </h2>
    </header>
    <div class="snap-container"></div>
  </section>
</template>

<style scoped></style>
