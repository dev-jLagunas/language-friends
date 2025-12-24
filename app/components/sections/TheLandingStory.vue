<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isLarge = useMediaQuery("(min-width: 768px)");
</script>

<template>
  <main class="relative">
    <HomeSectionOne v-if="!isLarge" />
    <HomeSectionOneLg v-else />

    <HomeSectionTwo />
    <HomeSectionThree />

    <HomeSectionFour v-if="isLarge" />
    <HomeSectionFourMobile v-else />

    <HomeSectionSix />
    <HomeSectionFinal />
  </main>
</template>

<style scoped></style>
