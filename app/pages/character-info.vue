<script setup lang="ts"></script>

<template>
  <section
    class="mx-auto pb-24 px-4 md:pt-24 font-yomogi theme-toggle-styles space-y-8 md:space-y-16"
  >
    <!-- Page Intro -->
    <header class="dashed-border rounded-2xl">
      <h1 class="section-card-title section-title-underline">
        {{ $t("characters.title") }}
      </h1>
      <p class="section-body-type">
        {{ $t("characters.intro") }}
      </p>
    </header>

    <!-- Moko -->
    <section
      class="text-dark-primary grid grid-cols-1 mt-4 md:place-items-center md:place-content-center md:grid-cols-2 gap-10 items-center"
    >
      <div class="bg-moko-blue-soft relative rounded-2xl p-4 md:p-8">
        <div class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.moko.name") }}
          </h2>
          <Icon name="mdi:paw" class="text-4xl opacit-80" />
        </div>

        <p class="section-body-type">
          {{ $t("homeSectionThree.moko.textA") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("homeSectionThree.moko.textB") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.moko.learningRole") }}
        </p>
      </div>

      <img
        src="/images/moko/moko-collage-1.png"
        alt=""
        class="dashed-border rounded-2xl rotate-12 my-8"
      />
    </section>

    <!-- Niko -->
    <section class="grid grid-cols-1 mt-4 md:grid-cols-2 gap-10 items-center">
      <div
        class="bg-niko-purple-soft rounded-2xl p-4 md:order-2 md:p-8 text-dark-primary"
      >
        <div class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.niko.name") }}
          </h2>
          <Icon name="mdi:cat" class="text-4xl opacit-80" />
        </div>

        <p class="section-body-type">
          {{ $t("homeSectionThree.niko.textA") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("homeSectionThree.niko.textB") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.niko.learningRole") }}
        </p>
      </div>

      <img
        src="/images/niko/niko-collage-1.png"
        alt=""
        class="dashed-border rounded-2xl -rotate-12 my-8"
      />
    </section>

    <!-- Okja -->
    <section class="grid grid-cols-1 mt-4 md:grid-cols-2 gap-10 items-center">
      <div class="bg-okja-yellow-soft rounded-2xl text-dark-primary p-4 md:p-8">
        <div class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.okja.name") }}
          </h2>
          <Icon name="mdi:paw" class="text-4xl opacit-80" />
        </div>

        <p class="section-body-type">
          {{ $t("homeSectionThree.okja.textA") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("homeSectionThree.okja.textB") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.okja.learningRole") }}
        </p>
      </div>

      <img
        src="/images/okja/okja-collage-1.png"
        alt=""
        class="dashed-border rounded-2xl rotate-12 my-8"
      />
    </section>

    <!-- Closing -->
    <footer class="text-center my-8">
      <p class="section-body-type">
        {{ $t("characters.closing.text") }}
      </p>
    </footer>
  </section>
</template>
