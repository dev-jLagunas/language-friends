<script setup lang="ts"></script>

<template>
  <main
    class="mx-auto font-yomogi theme-toggle-styles max-w-7xl px-4 page-paddings"
  >
    <ProgressIndicator :total="6" />
    <!-- Page Intro -->
    <article data-step="1" class="how-to-article">
      <section class="bg-moko-blue-soft how-to-section">
        <p
          class="section-big-numbers absolute text-dark-primary/50 dark:text-light-primary/50 -top-10 right-0 md:-top-24 md:-right-8"
        >
          1.
        </p>
        <header class="flex items-center justify-between text-dark-primary">
          <h1 class="section-card-title section-title-underline">
            {{ $t("howToUse.title") }}
          </h1>
          <Icon name="mdi:book-open-page-variant" class="text-4xl opacity-80" />
        </header>
        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.intro") }}
        </p>
      </section>
      <figure class="how-to-img">
        <img
          src="/images/mockups/1-LIKE-Mockup-3.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </figure>
    </article>

    <!-- Pedagogy -->
    <article data-step="2" class="how-to-article">
      <section class="bg-niko-purple-soft how-to-section md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          2.
        </p>
        <header class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.pedagogy.title") }}
          </h2>
          <Icon name="mdi:lightbulb-outline" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.pedagogy.text") }}
        </p>
      </section>

      <figure class="how-to-img">
        <img
          src="/images/mockups/1-LIKE-Mockup-2.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </figure>
    </article>
    <!-- Book Structure -->
    <article data-step="3" class="how-to-article">
      <section class="bg-okja-yellow-soft how-to-section">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          3.
        </p>
        <header class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.structure.title") }}
          </h2>
          <Icon name="mdi:view-list-outline" class="text-4xl opacity-80" />
        </header>
        <ul class="mt-3 space-y-2 text-dark-primary">
          <li
            v-for="(point, i) in $tm('howToUse.structure.points')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:paw" class="opacity-70 mt-1" />
            <span>{{ $rt(point) }}</span>
          </li>
        </ul>
      </section>
      <figure class="how-to-img">
        <img
          src="/images/mockups/2-VERBS-Mockup-2.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </figure>
    </article>
    <!-- Parents -->
    <article data-step="4" class="how-to-article">
      <section class="bg-moko-blue-soft how-to-section md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          4.
        </p>
        <header class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.parents.title") }}
          </h2>
          <Icon name="mdi:account-heart-outline" class="text-4xl opacity-80" />
        </header>
        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.parents.text") }}
        </p>
        <ul class="mt-3 space-y-2 text-dark-primary">
          <li
            v-for="(tip, i) in $tm('howToUse.parents.tips')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:cat" class="opacity-70 mt-1" />
            <span>{{ $rt(tip) }}</span>
          </li>
        </ul>
      </section>
      <figure class="how-to-img">
        <img
          src="/images/mockups/mom-and-son-5.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </figure>
    </article>
    <!-- Independent Children -->
    <article data-step="5" class="how-to-article">
      <section class="bg-niko-purple-soft how-to-section">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          5.
        </p>
        <header class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.children.title") }}
          </h2>
          <Icon name="mdi:school-outline" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.children.text") }}
        </p>

        <ul class="mt-3 space-y-2 text-dark-primary">
          <li
            v-for="(tip, i) in $tm('howToUse.children.tips')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:star-outline" class="opacity-70 mt-1" />
            <span>{{ $rt(tip) }}</span>
          </li>
        </ul>
      </section>
      <figure class="how-to-img">
        <img
          src="/images/mockups/dad-and-son-2.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </figure>
    </article>
    <!-- Bilingual -->
    <article data-step="6" class="how-to-article">
      <section class="bg-okja-yellow-soft how-to-section md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          6.
        </p>
        <header class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.bilingual.title") }}
          </h2>
          <Icon name="mdi:translate" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.bilingual.text") }}
        </p>
        <ul class="mt-3 space-y-2 text-dark-primary">
          <li
            v-for="(tip, i) in $tm('howToUse.bilingual.tips')"
            :key="i"
            class="section-body-type flex gap-2"
          >
            <Icon name="mdi:swap-horizontal" class="opacity-70 mt-1" />
            <span>{{ $rt(tip) }}</span>
          </li>
        </ul>
      </section>
      <figure class="how-to-img">
        <img
          src="/images/mockups/bilingual-student.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </figure>
    </article>
    <!-- Closing -->
    <footer class="text-center max-w-2xl mx-auto">
      <p class="section-body-type">
        {{ $t("howToUse.closing.text") }}
      </p>
    </footer>
  </main>
</template>
