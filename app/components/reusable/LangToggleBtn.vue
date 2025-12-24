<script setup lang="ts">
import { computed } from "vue";

const router = useRouter();
const { locales, locale, setLocale } = useI18n();

const switchableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
);

const changeLocale = async (code: "ja" | "en") => {
  router.replace({ hash: "" });
  await setLocale(code);
};
</script>

<template>
  <button
    v-for="l in switchableLocales"
    :key="l.code"
    type="button"
    @click="changeLocale(l.code)"
    :aria-label="l.name"
    class="flex flex-row items-center hover:cursor-pointer"
  >
    <span>{{ l.name }}</span>
  </button>
</template>
