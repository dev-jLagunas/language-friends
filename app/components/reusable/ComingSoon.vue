<script setup lang="ts"></script>

<template>
  <section
    class="flex items-center justify-center font-yomogi theme-toggle-styles md:py-16"
  >
    <div class="max-w-md text-center">
      <!-- Image -->
      <img
        src="/images/everyone/cats-coming-soon.webp"
        alt="The Language Friends working together"
        class="mx-auto w-64 md:w-full"
      />

      <!-- Heading -->
      <h1 class="text-4xl font-bold mb-2">{{ $t("comingSoon.title") }}</h1>

      <!-- Message -->
      <p class="mb-4">
        {{ $t("comingSoon.message") }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>
