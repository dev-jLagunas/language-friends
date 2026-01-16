<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const { locale } = useI18n();

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);
</script>

<template>
  <section
    class="theme-toggle-styles font-yomogi md:pt-28 pb-8 lg:pt-32 mx-auto"
  >
    <header class="relative px-4 text-center md:mb-8">
      <h1
        :class="heroTitleFont"
        class="font-bold leading-7 mb-2 text-3xl sm:mb-6 sm:text-6xl lg:text-7xl lg:mb-8 xl:text-8xl xl:mb-12"
      >
        {{ $t("brand.name") }}
      </h1>
      <h3
        class="font-yomogi text-xl leading-5 px-4 mb-4 md:text-2xl md:leading-7"
      >
        {{ $t("hero.description") }}
      </h3>
    </header>
    <HeroCharacters />
    <HeroBottomGrid />
  </section>
</template>

<style scoped></style>
