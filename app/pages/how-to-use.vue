<script setup lang="ts"></script>

<template>
  <section
    class="mx-auto px-4 md:pt-24 pb-24 font-yomogi theme-toggle-styles space-y-12 md:space-y-20"
  >
    <!-- Page Intro -->
    <section class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 md:-rotate-3">
        <div class="flex items-center justify-between">
          <h1 class="section-card-title section-title-underline">
            {{ $t("howToUse.title") }}
          </h1>
          <Icon name="mdi:book-open-page-variant" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2">
          {{ $t("howToUse.intro") }}
        </p>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center rotate-12"
      >
        <Icon name="mdi:book-heart-outline" class="text-6xl opacity-70" />
      </div>
    </section>

    <!-- Pedagogy -->
    <section class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
        class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 md:rotate-3 md:order-1"
      >
        <div class="flex items-center justify-between">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.pedagogy.title") }}
          </h2>
          <Icon name="mdi:lightbulb-outline" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2">
          {{ $t("howToUse.pedagogy.text") }}
        </p>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center -rotate-12"
      >
        <Icon name="mdi:repeat" class="text-6xl opacity-70" />
      </div>
    </section>

    <!-- Book Structure -->
    <section class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 md:-rotate-3">
        <div class="flex items-center justify-between">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.structure.title") }}
          </h2>
          <Icon name="mdi:view-list-outline" class="text-4xl opacity-80" />
        </div>

        <ul class="mt-3 space-y-2">
          <li
            v-for="(point, i) in $tm('howToUse.structure.points')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:paw" class="opacity-70 mt-1" />
            <span>{{ $rt(point) }}</span>
          </li>
        </ul>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center rotate-12"
      >
        <Icon name="mdi:palette-outline" class="text-6xl opacity-70" />
      </div>
    </section>

    <!-- Parents -->
    <section class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
        class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 md:rotate-3 md:order-1"
      >
        <div class="flex items-center justify-between">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.parents.title") }}
          </h2>
          <Icon name="mdi:account-heart-outline" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2">
          {{ $t("howToUse.parents.text") }}
        </p>

        <ul class="mt-3 space-y-2">
          <li
            v-for="(tip, i) in $tm('howToUse.parents.tips')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:cat" class="opacity-70 mt-1" />
            <span>{{ $rt(tip) }}</span>
          </li>
        </ul>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center -rotate-12"
      >
        <Icon name="mdi:book-open-variant" class="text-6xl opacity-70" />
      </div>
    </section>

    <!-- Independent Children -->
    <section class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 md:-rotate-3">
        <div class="flex items-center justify-between">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.children.title") }}
          </h2>
          <Icon name="mdi:school-outline" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2">
          {{ $t("howToUse.children.text") }}
        </p>

        <ul class="mt-3 space-y-2">
          <li
            v-for="(tip, i) in $tm('howToUse.children.tips')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:star-outline" class="opacity-70 mt-1" />
            <span>{{ $rt(tip) }}</span>
          </li>
        </ul>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center rotate-12"
      >
        <Icon name="mdi:progress-check" class="text-6xl opacity-70" />
      </div>
    </section>

    <!-- Bilingual -->
    <section class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
        class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 md:rotate-3 md:order-1"
      >
        <div class="flex items-center justify-between">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.bilingual.title") }}
          </h2>
          <Icon name="mdi:translate" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2">
          {{ $t("howToUse.bilingual.text") }}
        </p>

        <ul class="mt-3 space-y-2">
          <li
            v-for="(tip, i) in $tm('howToUse.bilingual.tips')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:swap-horizontal" class="opacity-70 mt-1" />
            <span>{{ $rt(tip) }}</span>
          </li>
        </ul>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center -rotate-12"
      >
        <Icon name="mdi:earth" class="text-6xl opacity-70" />
      </div>
    </section>

    <!-- Closing -->
    <footer class="text-center max-w-2xl mx-auto">
      <p class="section-body-type">
        {{ $t("howToUse.closing.text") }}
      </p>
    </footer>
  </section>
</template>
