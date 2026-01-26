<script setup lang="ts"></script>

<template>
  <div class="px-4 mt-4 gap-2 grid grid-cols-3">
    <figure
      class="dashed-border rounded-xl md:rounded-2xl flex-col-center-center p-2 md:p-6"
    >
      <figcaption class="leading-5 text-center sm:text-xl">
        {{ $t("hero.prompts[0]") }}
      </figcaption>
      <img
        src="/images/mockups/book-mockup-2.webp"
        alt="mock up of book and ipad"
        class="w-full max-w-50"
      />
    </figure>

    <figure
      class="dashed-border rounded-xl md:rounded-2xl flex-col-center-center p-2 md:p-6"
    >
      <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
        {{ $t("hero.prompts[1]") }}
      </figcaption>

      <img
        src="/images/mockups/four-ipad-mockup.png"
        alt=""
        class="w-full max-w-50"
      />
    </figure>
    <figure
      class="dashed-border rounded-xl md:rounded-2xl flex-col-center-center p-2 md:p-6"
    >
      <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
        {{ $t("hero.prompts[2]") }}
      </figcaption>

      <img
        src="/images/mockups/1-LIKE-Book-Mockup-1.webp"
        alt=""
        class="w-full max-w-50"
      />
    </figure>
    <div class="col-span-3 text-center mt-4">
      <NuxtLink
        :to="$localePath({ path: '/', hash: '#landingStory' })"
        class="rounded-xl py-2 px-8 bg-green-signifier text-dark-primary font-black hover:rounded-md transition-all duration-300 ease-in-out md:text-xl"
      >
        {{ $t("navigation.newVisitors.label") }}
      </NuxtLink>
    </div>
  </div>
</template>
