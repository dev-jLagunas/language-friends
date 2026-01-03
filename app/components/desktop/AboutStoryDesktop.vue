<script setup lang="ts"></script>

<template>
  <section
    class="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-16 md:space-y-24 font-yomogi"
  >
    <!-- Intro -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div class="bg-moko-blue-soft rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div class="flex items-center gap-3 mb-4">
          <Icon name="mdi:paw" class="text-2xl md:text-3xl opacity-80" />
          <Icon name="mdi:cat" class="text-2xl md:text-3xl opacity-80" />
        </div>

        <h2 class="section-card-title section-title-underline">
          {{ $t("about.title") }}
        </h2>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.intro") }}
        </p>
      </div>

      <img
        src="/images/mockups/teacher-and-child.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full"
      />
    </div>

    <!-- Philosophy -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <img
        src="/images/mockups/dad-and-son1.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full order-last md:order-first"
      />

      <div class="bg-niko-purple-soft rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div class="flex items-center gap-3 mb-4">
          <Icon name="tabler:cat" class="text-2xl md:text-3xl opacity-80" />
          <Icon
            name="mdi:cat-outline"
            class="text-2xl md:text-3xl opacity-80"
          />
        </div>

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.philosophy.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.philosophy.text") }}
        </p>
      </div>
    </div>

    <!-- Learning -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div class="bg-okja-yellow-soft rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div class="flex items-center gap-3 mb-4">
          <Icon name="fa6-solid:cat" class="text-2xl md:text-3xl opacity-80" />
          <Icon name="mdi:paw" class="text-2xl md:text-3xl opacity-80" />
        </div>

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.learning.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.learning.text") }}
        </p>
      </div>

      <img
        src="/images/mockups/mon-and-son1.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full"
      />
    </div>

    <!-- Characters -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <img
        src="/images/mockups/book-mockup-3.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full order-last md:order-first"
      />

      <div class="bg-moko-blue-soft rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div class="flex items-center gap-3 mb-4">
          <Icon
            name="mdi:cat-variant"
            class="text-2xl md:text-3xl opacity-80"
          />
          <Icon
            name="mdi:cat-variant-outline"
            class="text-2xl md:text-3xl opacity-80"
          />
        </div>

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.characters.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.characters.text") }}
        </p>
      </div>
    </div>

    <!-- Parents -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div class="bg-niko-purple-soft rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div class="flex items-center gap-3 mb-4">
          <Icon
            name="tabler:cat-head"
            class="text-2xl md:text-3xl opacity-80"
          />
          <Icon name="mdi:paw" class="text-2xl md:text-3xl opacity-80" />
        </div>

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.parents.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.parents.text") }}
        </p>
      </div>

      <img
        src="/images/mockups/mom-and-son3.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full"
      />
    </div>

    <!-- Closing -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <img
        src="/images/mockups/mom-and-son4.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full order-last md:order-first"
      />

      <div class="bg-okja-yellow-soft rounded-2xl md:rounded-3xl p-6 md:p-10">
        <div class="flex items-center gap-3 mb-4">
          <Icon name="mdi:cat" class="text-2xl md:text-3xl opacity-80" />
          <Icon
            name="mdi:cat-outline"
            class="text-2xl md:text-3xl opacity-80"
          />
        </div>

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.closing.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.closing.text") }}
        </p>
      </div>
    </div>
  </section>
</template>
