<script setup lang="ts">
import { onMounted } from "vue";

const i18n = useI18n();

onMounted(() => {
  console.log("ACTIVE LOCALE:", i18n.locale.value);
  console.log("ALL LOCALES:", i18n.locales.value);
  console.log("JA MESSAGES:", i18n.getLocaleMessage("ja"));
  console.log("EN MESSAGES:", i18n.getLocaleMessage("en"));
});
</script>

<template>
  <main class="dark:bg-dark-secondary dark:text-light-primary">
    <h1>Welcome to the Index Page</h1>
    <p>main content must go here, this is the landing page content</p>
  </main>
</template>
