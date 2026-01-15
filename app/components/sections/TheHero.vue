<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const { locale } = useI18n();

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);
</script>

<template>
  <section class="theme-toggle-styles font-yomogi md:pt-28 lg:pt-32">
    <header class="relative px-4 text-center md:mb-8">
      <h1
        :class="heroTitleFont"
        class="font-bold leading-7 mb-2 text-3xl md:mb-6 md:text-6xl lg:text-7xl lg:mb-8 xl:text-8xl xl:mb-12"
      >
        {{ $t("hero.title") }}
      </h1>
      <h3
        class="font-yomogi text-xl leading-5 px-4 mb-4 md:text-2xl md:leading-6"
      >
        {{ $t("hero.description") }}
      </h3>
    </header>
    <HeroCharacters />
    <HeroBottomGrid />
  </section>
</template>

<style scoped></style>
