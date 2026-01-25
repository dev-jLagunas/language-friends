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
        <div class="flex justify-center items-center gap-6 mt-2">
          <a
            href="https://www.instagram.com/thelanguagefriends?igsh=MXM4c2NzcDRidHg3ag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Icon name="mdi:instagram" class="text-3xl" />
          </a>

          <a
            href="https://www.youtube.com/channel/UC4II6bDJtBYCo1wPdUX_y1A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Icon name="mdi:youtube" class="text-4xl" />
          </a>
        </div>
        <img
          src="/images/everyone/cats-together-school.webp"
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
