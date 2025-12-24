<script setup lang="ts"></script>

<template>
  <section
    class="flex items-center justify-center px-6 mb-16 font-yomogi theme-toggle-styles"
  >
    <div class="max-w-md text-center">
      <!-- Image -->
      <img
        src="/images/everyone/cats-coming-soon.png"
        alt="The Language Friends working together"
        class="mx-auto w-64"
      />

      <!-- Heading -->
      <h1 class="text-4xl font-bold mb-2">{{ $t("comingSoon.title") }}</h1>

      <!-- Message -->
      <p class="mb-4">
        {{ $t("comingSoon.message") }}
      </p>

      <!-- Email CTA -->
      <form class="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Your email"
          class="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          class="px-4 py-2 rounded-md bg-green-signifier text-white"
        >
          {{ $t("comingSoon.cta") }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
