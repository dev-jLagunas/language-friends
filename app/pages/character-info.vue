<script setup lang="ts"></script>

<template>
  <section
    class="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24 font-yomogi"
  >
    <!-- Page Intro -->
    <header class="max-w-3xl space-y-4">
      <h1 class="section-card-title section-title-underline">
        {{ $t("characters.title") }}
      </h1>
      <p class="section-body-type">
        {{ $t("characters.intro") }}
      </p>
    </header>

    <!-- Moko -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div class="space-y-6">
        <h2 class="section-card-title">
          {{ $t("characters.moko.name") }}
        </h2>

        <p class="section-body-type">
          {{ $t("homeSectionThree.moko.textA") }}
        </p>
        <p class="section-body-type">
          {{ $t("homeSectionThree.moko.textB") }}
        </p>

        <p class="text-sm opacity-70">
          {{ $t("characters.moko.learningRole") }}
        </p>
      </div>

      <div class="relative flex gap-4 flex-wrap justify-center">
        <img
          src="/images/moko/moko-hello-1.png"
          class="w-40 md:w-48 rounded-2xl"
        />
        <img
          src="/images/moko/moko-hello-1.png"
          class="w-32 md:w-40 rounded-2xl"
        />
        <img
          src="/images/moko/moko-hello-1.png"
          class="w-28 md:w-36 rounded-2xl"
        />
      </div>
    </section>

    <!-- Niko -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div
        class="relative flex gap-4 flex-wrap justify-center order-last md:order-first"
      >
        <img
          src="/images/niko/niko-hello-1.png"
          class="w-40 md:w-48 rounded-2xl"
        />
        <img
          src="/images/niko/niko-hello-1.png"
          class="w-32 md:w-40 rounded-2xl rotate-[5deg]"
        />
        <img
          src="/images/niko/niko-hello-1.png"
          class="w-28 md:w-36 rounded-2xl rotate-[-5deg]"
        />
      </div>

      <div class="space-y-6">
        <h2 class="section-card-title">
          {{ $t("characters.niko.name") }}
        </h2>

        <p class="section-body-type">
          {{ $t("homeSectionThree.niko.textA") }}
        </p>
        <p class="section-body-type">
          {{ $t("homeSectionThree.niko.textB") }}
        </p>

        <p class="text-sm opacity-70">
          {{ $t("characters.niko.learningRole") }}
        </p>
      </div>
    </section>

    <!-- Okja -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div class="space-y-6">
        <h2 class="section-card-title">
          {{ $t("characters.okja.name") }}
        </h2>

        <p class="section-body-type">
          {{ $t("homeSectionThree.okja.textA") }}
        </p>
        <p class="section-body-type">
          {{ $t("homeSectionThree.okja.textB") }}
        </p>

        <p class="text-sm opacity-70">
          {{ $t("characters.okja.learningRole") }}
        </p>
      </div>

      <div class="relative flex gap-4 flex-wrap justify-center">
        <img
          src="/images/okja/okja-hello-1.png"
          class="w-40 md:w-48 rounded-2xl"
        />
        <img
          src="/images/okja/okja-hello-1.png"
          class="w-32 md:w-40 rounded-2xl"
        />
        <img
          src="/images/okja/okja-hello-1.png"
          class="w-28 md:w-36 rounded-2xl"
        />
      </div>
    </section>

    <!-- Closing -->
    <footer class="max-w-3xl">
      <p class="section-body-type opacity-80">
        {{ $t("characters.closing.text") }}
      </p>
    </footer>
  </section>
</template>
