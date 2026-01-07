<script setup lang="ts"></script>

<template>
  <div
    class="font-yomogi py-4 border-b border-dark-primary/20 dark:border-light-primary/20 md:hidden"
  >
    <section class="relative flex-col-center-center">
      <figure class="flex-col-center-center mb-2">
        <img src="/images/everyone/cats-peace-sign.png" alt="" class="w-20" />
        <p class="font-black -mt-8">The Language Friends</p>
      </figure>
      <NuxtLink :to="$localePath({ path: '/', hash: '#landingStory' })" class=""
        ><button class="green-cta-btn">
          {{ $t("footer.menu.start") }}
        </button></NuxtLink
      >
    </section>
  </div>
</template>

<style scoped></style>
