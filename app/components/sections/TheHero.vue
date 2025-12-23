<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const { locale } = useI18n();

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);
</script>

<template>
  <section class="theme-toggle-styles font-yomogi">
    <header class="relative px-4 text-center md:mb-4">
      <h1
        :class="heroTitleFont"
        class="font-bold mb-2 text-4xl md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl"
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
