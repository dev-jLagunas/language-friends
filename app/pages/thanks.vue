<script setup lang="ts"></script>

<template>
  <section
    class="section-wrapper min-h-[70vh] flex-col-center-center text-center max-w-7xl"
  >
    <!-- Image -->
    <img
      src="/images/everyone/cats-with-sign.webp"
      alt="Thank you"
      class="w-40 md:w-56 mb-6 rounded-2xl"
    />

    <!-- Title -->
    <h1 class="section-title-type mb-4">
      {{ $t("thanks.title") }}
    </h1>

    <!-- Message -->
    <p class="section-body-type max-w-xl opacity-90">
      {{ $t("thanks.message") }}
    </p>
  </section>
</template>
