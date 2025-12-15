<script setup lang="ts">
import { computed } from "vue";

const { locale } = useI18n();

const heroTitleFont = computed(() =>
  locale.value === "ja" ? "font-cherry" : "font-yomogi"
);
</script>

<template>
  <section class="mb-10">
    <header class="relative">
      <h1
        :class="heroTitleFont"
        class="font-bold text-center text-3xl my-4 text-dark-primary dark:text-light-primary tracking-wider xs:text-4xl md:text-6xl"
      >
        {{ $t("hero.title") }}
      </h1>
    </header>
    <div class="grid grid-cols-3 gap-2 px-4">
      <figure
        class="bg-moko-blue flex flex-col items-center justify-center py-8 max-h-75"
      >
        <img
          src="/images/moko/moko-hello-1.png"
          alt=""
          class="w-full max-w-50"
        />
        <figcaption
          class="font-cherry text-2xl text-light-primary tracking-widest"
        >
          {{ $t("characters.moko") }}
        </figcaption>
      </figure>
      <figure
        class="bg-niko-purple flex flex-col items-center justify-center max-h-75"
      >
        <img
          src="/images/niko/niko-hello-1.png"
          alt=""
          class="w-full max-w-50"
        />
        <figcaption
          class="font-cherry text-2xl text-light-primary tracking-widest"
        >
          {{ $t("characters.niko") }}
        </figcaption>
      </figure>
      <figure
        class="bg-okja-yellow flex flex-col items-center justify-center max-h-75"
      >
        <img
          src="/images/okja/okja-hello-1.png"
          alt=""
          class="w-full max-w-50"
        />
        <figcaption
          class="font-cherry text-2xl text-light-primary tracking-widest"
        >
          {{ $t("characters.okja") }}
        </figcaption>
      </figure>
    </div>

    <div class="px-4 space-y-2 mt-4 md:grid md:grid-cols-3 md:gap-4">
      <figure
        class="border border-dark-primary dark:border-light-primary border-dashed flex flex-row items-center justify-center gap-2 px-2 md:flex-col md:py-4"
      >
        <figcaption class="font-yomogi leading-5 text-center">
          {{ $t("hero.prompt1") }}
        </figcaption>
        <img
          src="/images/everyone/cats-together-bike.png"
          alt=""
          class="w-1/4 max-w-50 md:w-full"
        />
      </figure>

      <figure
        class="border border-dark-primary border-dashed dark:border-light-primary flex flex-row items-center justify-center gap-2 px-2 md:flex-col md:py-4"
      >
        <figcaption class="font-yomogi leading-5 text-center">
          {{ $t("hero.prompt2") }}
        </figcaption>

        <img
          src="/images/everyone/cats-together-hug.png"
          alt=""
          class="w-1/4 max-w-50 md:w-full"
        />
      </figure>
      <figure
        class="border border-dark-primary border-dashed dark:border-light-primary flex flex-row items-center justify-center gap-2 px-2 md:flex-col md:py-4"
      >
        <figcaption class="font-yomogi leading-5 text-center">
          {{ $t("hero.prompt3") }}
        </figcaption>

        <img
          src="/images/everyone/cats-together-school.png"
          alt=""
          class="w-1/4 max-w-50 md:w-full"
        />
      </figure>
      <form aria-label="メール登録CTA" class="col-span-3">
        <label for="email" class="sr-only">
          {{ $t("hero.emailPlaceholder") }}
        </label>
        <h3 class="font-yomogi tracking-tight text-lg leading-5">
          {{ $t("hero.description") }}
        </h3>
        <h3 class="font-yomogi tracking-tight text-lg font-bold mt-2 leading-5">
          {{ $t("hero.note") }}
        </h3>
        <div class="mt-4 md:flex">
          <input
            id="email"
            type="email"
            name="email"
            :placeholder="$t('hero.emailPlaceholder')"
            autocomplete="email"
            required
            class="w-full py-2"
          />

          <button
            type="submit"
            class="bg-green-signifier px-3 py-2 w-full text-dark-primary font-bold font-work md:w-1/2"
          >
            {{ $t("hero.subscribeButton") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
