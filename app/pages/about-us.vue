<script setup lang="ts"></script>

<template>
  <main>
    <!-- Mobile only -->
    <div class="block md:hidden">
      <AboutStoryMobile />
    </div>

    <!-- Desktop only -->
    <div class="hidden md:block">
      <AboutStoryDesktop />
    </div>
  </main>
</template>

<style scoped></style>
