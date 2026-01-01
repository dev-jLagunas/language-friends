<script setup lang="ts">
const steps = [
  { id: "s1", label: "1" },
  { id: "s2", label: "2" },
  { id: "s3", label: "3" },
  { id: "s4", label: "4" },
  { id: "s5", label: "5" },
  { id: "s6", label: "6" },
];
</script>

<template>
  <main class="relative">
    <ScrollIndicator :steps="steps" />
    <HomeSectionOne />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeSectionFour />
    <HomeSectionFive />
    <HomeSectionFinal />
  </main>
</template>

<style scoped></style>
