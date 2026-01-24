<script setup lang="ts"></script>

<template>
  <section class="books-page-wrapper pt-8 pb-32 md:pt-42 md:mx-8">
    <ProgressIndicator :total="5" />
    <!-- PHRASES SERIES -->
    <article id="phrases-container" data-step="1" class="books-info-container">
      <section class="bg-moko-blue-soft books-text-container relative">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          1.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.phrases.title") }}
          </h2>
          <Icon
            name="heroicons:chat-bubble-left-right"
            class="text-5xl opacity-75"
          />
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
          <a
            href="https://www.amazon.co.jp/dp/B0GHZJYX2T"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
          >
            Amazon KDP
          </a>
          <a
            href="https://www.kobo.com/jp/ja/ebook/the-language-friends-3?sId=38c227c2-3908-42c2-9624-b3cd05916668&ssId=E-24IBw_d69pqiuZnOVee&cPos=5"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
            >Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/0-INTRO-Collage-1.webp"
        alt=""
        class="dashed-border books-images"
      />
    </article>
    <!-- LIKE SERIES -->
    <article data-step="2" class="books-info-container">
      <section
        class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 relative lg:order-1"
      >
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          2.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.like.title") }}
          </h2>
          <Icon name="heroicons:heart" class="text-5xl opacity-80" />
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
          <a
            href="https://www.amazon.co.jp/dp/B0GJ5KP8TR"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
          >
            Amazon KDP
          </a>
          <a
            href="https://www.kobo.com/jp/ja/ebook/the-language-friends-2?sId=d603fb0f-18e4-40c8-9f88-630784fa6187&ssId=Z1VJ1vQoElwQf1knjLy4c&cPos=1"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
            >Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/1-LIKE-Collage-1.webp"
        alt=""
        class="dashed-border books-images"
      />
    </article>
    <!-- VERBS SERIES -->
    <article data-step="3" class="books-info-container">
      <section class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 relative">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          3.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.verb.title") }}
          </h2>
          <Icon name="heroicons:bolt" class="text-5xl opacity-80" />
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
          <a
            href="https://www.amazon.co.jp/dp/B0GJ5L3PSZ"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
          >
            Amazon KDP
          </a>

          <a
            href="https://www.kobo.com/jp/ja/ebook/the-language-friends-4?sId=ced198ba-05f6-4788-9bad-25a92be9eda3&ssId=SJ70qGnHORH21VboxqijZ&cPos=2"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
            >Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/2-VERBS-Collage-1.webp"
        alt=""
        class="dashed-border books-images"
      />
    </article>
    <!-- ADJ SERIES -->
    <article data-step="4" class="books-info-container">
      <section
        class="bg-moko-blue-soft rounded-2xl p-6 md:p-8 relative lg:order-1"
      >
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          4.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.adjective.title") }}
          </h2>
          <Icon name="heroicons:sparkles" class="text-5xl opacity-80" />
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
          <a
            href="https://www.amazon.co.jp/dp/B0GJ64B8CG"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
          >
            Amazon KDP
          </a>
          <a
            href="https://www.kobo.com/jp/ja/ebook/the-language-friends?sId=94396316-bf90-4cc9-a8a7-cba90fa85c58&ssId=K6X0Dqay_3P4g0lahRTQe&cPos=3"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
            >Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/3-ADJ-Collage-1.webp"
        alt=""
        class="dashed-border books-images"
      />
    </article>
    <!-- NOUNS SERIES -->
    <article data-step="5" class="books-info-container">
      <section class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 relative">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          5.
        </p>
        <div class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("books.series.noun.title") }}
          </h2>
          <Icon name="heroicons:heart" class="text-5xl opacity-80" />
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
          <a
            href="https://www.amazon.co.jp/dp/B0GJ6ZC6NW"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
          >
            Amazon KDP
          </a>

          <a
            href="https://www.kobo.com/jp/ja/ebook/the-language-friends?sId=94396316-bf90-4cc9-a8a7-cba90fa85c58&ssId=K6X0Dqay_3P4g0lahRTQe&cPos=3"
            target="_blank"
            rel="noopener noreferrer"
            class="green-cta"
            >Kobo
          </a>
        </div>
      </section>
      <img
        src="/images/books/4-NOUNS-Collage-1.webp"
        alt=""
        class="dashed-border books-images"
      />
    </article>
  </section>
</template>
