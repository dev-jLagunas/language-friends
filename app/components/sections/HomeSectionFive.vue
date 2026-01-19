<script setup lang="ts"></script>

<template>
  <section class="py-12 section-wrapper theme-toggle-styles max-w-7xl mx-auto">
    <div class="text-center p-4 rounded-2xl dark:border-light-primary/50">
      <div>
        <h2 class="section-title-type">
          {{ $t("home.stayConnected.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("home.stayConnected.subtitle") }}
        </p>
      </div>

      <div class="space-y-2">
        <div class="flex justify-center gap-6 mt-2">
          <a
            href="#"
            aria-label="Instagram"
            class="text-2xl hover:opacity-70 transition"
          >
            <Icon name="mdi:instagram" />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            class="text-2xl hover:opacity-70 transition"
          >
            <Icon name="mdi:youtube" />
          </a>

          <a
            href="#"
            aria-label="Email"
            class="text-2xl hover:opacity-70 transition"
          >
            <Icon name="mdi:email" />
          </a>
        </div>
        <img
          src="/images/everyone/cats-with-sign.webp"
          alt="Moko using cellphone"
          class="w-1/2 mx-auto my-4 md:w-1/4"
        />
        <p class="text-2xl font-bold">
          {{ $t("home.stayConnected.connectTitle") }}
        </p>
      </div>
      <SubscribeCTA />
    </div>
  </section>
</template>

<style scoped></style>
