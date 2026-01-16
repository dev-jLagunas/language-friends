<script setup lang="ts"></script>

<template>
  <section
    class="mx-auto px-4 font-yomogi theme-toggle-styles pt-12 pb-32 md:pt-44 space-y-8 md:space-y-24 max-w-7xl"
  >
    <ProgressIndicator :total="5" />
    <!-- phrases SERIES -->
    <article
      data-step="1"
      class="md:grid md:grid-cols-2 items-center gap-4 text-dark-primary md:gap-8"
    >
      <section class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 relative">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          1.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.phrases.title") }}
          </h2>
          <Icon name="heroicons:chat-bubble-left-right" class="text-5xl" />
        </div>

        <p class="section-body-type">
          {{ $t("books.series.phrases.description") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.phrases.howItWorks") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.phrases.visualApproach") }}
        </p>
        <ul class="section-body-type mt-4 space-y-1 font-bold">
          <li>• {{ $t("books.series.phrases.learningFocus") }}</li>
          <li>• {{ $t("books.series.phrases.languagePattern") }}</li>
          <li>• {{ $t("books.series.phrases.example") }}</li>
          <li>• {{ $t("books.series.phrases.ageRange") }}</li>
          <li>• {{ $t("books.series.phrases.tone") }}</li>
        </ul>

        <div class="mt-8 space-x-8">
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Amazon KDP
          </a>
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/0-INTRO-Collage-1.png"
        alt=""
        class="rounded-2xl dashed-border w-full mt-4 md:mt-0"
      />
    </article>
    <!-- LIKE SERIES -->
    <article
      data-step="2"
      class="md:grid md:grid-cols-2 items-center text-dark-primary gap-4 md:gap-8"
    >
      <section
        class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 relative md:order-1"
      >
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          2.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.like.title") }}
          </h2>
          <Icon name="heroicons:heart" class="text-3xl opacity-80" />
        </div>

        <p class="section-body-type">
          {{ $t("books.series.like.description") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.like.howItWorks") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.like.visualApproach") }}
        </p>
        <ul class="section-body-type mt-4 space-y-1 font-bold">
          <li>• {{ $t("books.series.like.learningFocus") }}</li>
          <li>• {{ $t("books.series.like.languagePattern") }}</li>
          <li>• {{ $t("books.series.like.example") }}</li>
          <li>• {{ $t("books.series.like.ageRange") }}</li>
          <li>• {{ $t("books.series.like.tone") }}</li>
        </ul>

        <div class="mt-8 space-x-8">
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Amazon KDP
          </a>
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/1-LIKE-Collage-1.png"
        alt=""
        class="rounded-2xl dashed-border w-full mt-4 md:mt-0"
      />
    </article>
    <!-- ADJ SERIES -->
    <article
      data-step="3"
      class="md:grid md:grid-cols-2 text-dark-primary items-center gap-4 md:gap-8"
    >
      <section class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 relative">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          3.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.verb.title") }}
          </h2>
          <Icon name="heroicons:bolt" class="text-5xl" />
        </div>

        <p class="section-body-type">
          {{ $t("books.series.verb.description") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.verb.howItWorks") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.verb.visualApproach") }}
        </p>
        <ul class="section-body-type mt-4 space-y-1 font-bold">
          <li>• {{ $t("books.series.verb.learningFocus") }}</li>
          <li>• {{ $t("books.series.verb.languagePattern") }}</li>
          <li>• {{ $t("books.series.verb.example") }}</li>
          <li>• {{ $t("books.series.verb.ageRange") }}</li>
          <li>• {{ $t("books.series.verb.tone") }}</li>
        </ul>

        <div class="mt-8 space-x-8">
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Amazon KDP
          </a>
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/2-VERBS-Collage-1.png"
        alt=""
        class="rounded-2xl dashed-border w-full mt-4 md:mt-0"
      />
    </article>
    <!-- ADJ SERIES -->
    <article
      data-step="4"
      class="md:grid md:grid-cols-2 items-center text-dark-primary gap-4 md:gap-8"
    >
      <section
        class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 relative md:order-1"
      >
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          4.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.adjective.title") }}
          </h2>
          <Icon name="heroicons:sparkles" class="text-3xl opacity-80" />
        </div>

        <p class="section-body-type">
          {{ $t("books.series.adjective.description") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.adjective.howItWorks") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.adjective.visualApproach") }}
        </p>
        <ul class="section-body-type mt-4 space-y-1 font-bold">
          <li>• {{ $t("books.series.adjective.learningFocus") }}</li>
          <li>• {{ $t("books.series.adjective.languagePattern") }}</li>
          <li>• {{ $t("books.series.adjective.example") }}</li>
          <li>• {{ $t("books.series.adjective.ageRange") }}</li>
          <li>• {{ $t("books.series.adjective.tone") }}</li>
        </ul>

        <div class="mt-8 space-x-8">
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Amazon KDP
          </a>
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/3-ADJ-Collage-1.png"
        alt=""
        class="rounded-2xl dashed-border w-full mt-4 md:mt-0"
      />
    </article>
    <!-- LIKE SERIES -->
    <article
      data-step="5"
      class="md:grid md:grid-cols-2 items-center text-dark-primary gap-4 md:gap-8"
    >
      <section class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 relative">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          5.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.noun.title") }}
          </h2>
          <Icon name="heroicons:heart" class="text-3xl opacity-80" />
        </div>

        <p class="section-body-type">
          {{ $t("books.series.noun.description") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.noun.howItWorks") }}
        </p>
        <p class="section-body-type mt-2">
          {{ $t("books.series.noun.visualApproach") }}
        </p>
        <ul class="section-body-type mt-4 space-y-1 font-bold">
          <li>• {{ $t("books.series.noun.learningFocus") }}</li>
          <li>• {{ $t("books.series.noun.languagePattern") }}</li>
          <li>• {{ $t("books.series.noun.example") }}</li>
          <li>• {{ $t("books.series.noun.ageRange") }}</li>
          <li>• {{ $t("books.series.noun.tone") }}</li>
        </ul>

        <div class="mt-8 space-x-8">
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Amazon KDP
          </a>
          <a href="#" class="bg-green-signifier font-bold px-4 py-2 rounded-xl">
            Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/4-NOUNS-Collage-1.png"
        alt=""
        class="rounded-2xl dashed-border w-full mt-4 md:mt-0"
      />
    </article>
  </section>
</template>
