<script setup lang="ts">
import { ref, computed } from "vue";

const { locales, locale, setLocale } = useI18n();

const switchableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);
</script>

<template>
  <button
    v-for="l in switchableLocales"
    :key="l.code"
    type="button"
    @click="setLocale(l.code)"
    :aria-label="l.name"
    class="flex flex-row items-center dashed-btn"
  >
    <span>{{ l.name }}</span>
  </button>
</template>
