<script setup lang="ts"></script>

<template>
  <form
    aria-label="メール登録CTA"
    class="rounded-2xl dashed-border mt-2 px-2 py-2 md:py-4"
  >
    <label for="email" class="sr-only">
      {{ $t("hero.emailPlaceholder") }}
    </label>

    <h3
      class="font-yomogi text-center text-lg mt-2 leading-5 md:leading-7 md:text-2xl"
    >
      {{ $t("hero.note") }}
    </h3>
    <div class="mt-4 md:flex md:w-1/2 md:mx-auto">
      <input
        id="email"
        type="email"
        name="email"
        :placeholder="$t('hero.emailPlaceholder')"
        autocomplete="email"
        required
        class="w-full py-4 bg-dark-primary/10 dark:bg-light-primary px-2 h-10 placeholder:text--primary dark:placeholder:text-dark-primary"
      />

      <button
        type="submit"
        class="bg-green-signifier font-bold text-dark-primary w-full mt-2 md:w-1/3 md:mt-0"
      >
        {{ $t("hero.subscribeButton") }}
      </button>
    </div>
  </form>
</template>
