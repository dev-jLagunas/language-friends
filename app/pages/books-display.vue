<script setup lang="ts"></script>

<template>
  <section
    class="mx-auto px-4 md:pt-24 pb-24 font-yomogi theme-toggle-styles space-y-16"
  >
    <!-- Page Intro -->
    <!-- <header class="dashed-border rounded-2xl mx-auto space-y-4">
      <h1 class="section-card-title section-title-underline">
        {{ $t("books.title") }}
      </h1>
      <p class="section-body-type">
        {{ $t("books.intro") }}
      </p>
    </header> -->

    <!-- LIKE SERIES -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-moko-blue-soft rounded-2xl p-6 md:p-8">
        <h2 class="section-card-title">
          {{ $t("books.series.like.title") }}
        </h2>

        <p class="section-body-type mt-2">
          {{ $t("books.series.like.description") }}
        </p>

        <ul class="section-body-type mt-4 space-y-1 opacity-80">
          <li>• {{ $t("books.series.like.learningFocus") }}</li>
          <li>• {{ $t("books.series.like.languagePattern") }}</li>
          <li>• {{ $t("books.series.like.example") }}</li>
        </ul>

        <div class="mt-6 flex gap-4">
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Amazon KDP
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Kobo
          </a>
        </div>
      </div>

      <img
        src="/images/mockups/book-mockup-2.png"
        alt=""
        class="rounded-xl dashed-border w-full xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- VERB SERIES -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
        class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 md:order-2 md:rotate-3"
      >
        <h2 class="section-card-title">
          {{ $t("books.series.verb.title") }}
        </h2>

        <p class="section-body-type mt-2">
          {{ $t("books.series.verb.description") }}
        </p>

        <ul class="section-body-type mt-4 space-y-1 opacity-80">
          <li>• {{ $t("books.series.verb.learningFocus") }}</li>
          <li>• {{ $t("books.series.verb.languagePattern") }}</li>
          <li>• {{ $t("books.series.verb.example") }}</li>
        </ul>

        <div class="mt-6 flex gap-4">
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Amazon KDP
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Kobo
          </a>
        </div>
      </div>

      <img
        src="/images/mockups/book-mockup-2.png"
        alt=""
        class="rounded-xl dashed-border w-full - xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- ADJECTIVE SERIES -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-niko-purple-soft rounded-2xl p-6 md:p-8">
        <h2 class="section-card-title">
          {{ $t("books.series.adjective.title") }}
        </h2>

        <p class="section-body-type mt-2">
          {{ $t("books.series.adjective.description") }}
        </p>

        <ul class="section-body-type mt-4 space-y-1 opacity-80">
          <li>• {{ $t("books.series.adjective.learningFocus") }}</li>
          <li>• {{ $t("books.series.adjective.languagePattern") }}</li>
          <li>• {{ $t("books.series.adjective.example") }}</li>
        </ul>

        <div class="mt-6 flex gap-4">
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Amazon KDP
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Kobo
          </a>
        </div>
      </div>

      <img
        src="/images/mockups/book-mockup-2.png"
        alt=""
        class="rounded-xl dashed-border w-full xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- PREPOSITION SERIES -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
        class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 md:order-2 md:rotate-3"
      >
        <h2 class="section-card-title">
          {{ $t("books.series.preposition.title") }}
        </h2>

        <p class="section-body-type mt-2">
          {{ $t("books.series.preposition.description") }}
        </p>

        <ul class="section-body-type mt-4 space-y-1 opacity-80">
          <li>• {{ $t("books.series.preposition.learningFocus") }}</li>
          <li>• {{ $t("books.series.preposition.languagePattern") }}</li>
          <li>• {{ $t("books.series.preposition.example") }}</li>
        </ul>

        <div class="mt-6 flex gap-4">
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Amazon KDP
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Kobo
          </a>
        </div>
      </div>

      <img
        src="/images/mockups/book-mockup-2.png"
        alt=""
        class="rounded-xl dashed-border w-full - xs:w-3/4 xs:mx-auto"
      />
    </section>

    <!-- FRIENDS SERIES -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8">
        <h2 class="section-card-title">
          {{ $t("books.series.friends.title") }}
        </h2>

        <p class="section-body-type mt-2">
          {{ $t("books.series.friends.description") }}
        </p>

        <ul class="section-body-type mt-4 space-y-1 opacity-80">
          <li>• {{ $t("books.series.friends.learningFocus") }}</li>
          <li>• {{ $t("books.series.friends.languagePattern") }}</li>
          <li>• {{ $t("books.series.friends.example") }}</li>
        </ul>

        <div class="mt-6 flex gap-4">
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Amazon KDP
          </a>
          <a
            href="#"
            class="px-4 py-2 rounded-lg border border-dark-primary text-sm hover:bg-dark-primary hover:text-white transition"
          >
            Kobo
          </a>
        </div>
      </div>

      <img
        src="/images/mockups/book-mockup-2.png"
        alt=""
        class="rounded-xl dashed-border w-full xs:w-3/4 xs:mx-auto"
      />
    </section>
  </section>
</template>
