<script setup lang="ts"></script>

<template>
  <div class="px-4 mt-4 grid grid-cols-3 gap-2">
    <figure class="dashed-border flex-col-center-center p-1 md:p-2">
      <figcaption class="leading-5 text-center sm:text-xl">
        {{ $t("hero.prompt1") }}
      </figcaption>
      <img
        src="/images/mockups/book-mockup-2.png"
        alt="mock up of book and ipad"
        class="w-full max-w-50 hover:scale-110 transition-all ease duration-300"
      />
    </figure>

    <figure class="dashed-border flex-col-center-center p-1 md:p-2">
      <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
        {{ $t("hero.prompt2") }}
      </figcaption>

      <img
        src="/images/mockups/book-mockup.png"
        alt=""
        class="w-full max-w-50 hover:scale-110 transition-all ease duration-300"
      />
    </figure>
    <figure class="dashed-border flex-col-center-center p-1 md:p-2">
      <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
        {{ $t("hero.prompt3") }}
      </figcaption>

      <img
        src="/images/mockups/book-mockup-2.png"
        alt=""
        class="w-full max-w-50 hover:scale-110 transition-all ease duration-300"
      />
    </figure>
    <SubscribeCTA class="col-span-3" />
  </div>
</template>
