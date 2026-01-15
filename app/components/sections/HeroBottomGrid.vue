<script setup lang="ts"></script>

<template>
  <div class="px-4 mt-4 gap-2 grid grid-cols-3">
    <figure
      class="dashed-border rounded-xl md:rounded-2xl flex-col-center-center p-2 md:p-6"
    >
      <figcaption class="leading-5 text-center sm:text-xl">
        {{ $t("hero.prompt1") }}
      </figcaption>
      <img
        src="/images/mockups/book-mockup-2.png"
        alt="mock up of book and ipad"
        class="w-full max-w-50"
      />
    </figure>

    <figure
      class="dashed-border rounded-xl md:rounded-2xl flex-col-center-center p-2 md:p-6"
    >
      <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
        {{ $t("hero.prompt2") }}
      </figcaption>

      <img
        src="/images/mockups/book-mockup.png"
        alt=""
        class="w-full max-w-50"
      />
    </figure>
    <figure
      class="dashed-border rounded-xl md:rounded-2xl flex-col-center-center p-2 md:p-6"
    >
      <figcaption class="font-yomogi leading-5 text-center sm:text-xl">
        {{ $t("hero.prompt3") }}
      </figcaption>

      <img
        src="/images/mockups/1-LIKE-Book-Mockup-1.png"
        alt=""
        class="w-full max-w-50"
      />
    </figure>
  </div>
</template>
