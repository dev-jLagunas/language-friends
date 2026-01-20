<script setup lang="ts"></script>

<template>
  <section
    class="mx-auto px-4 pt-8 md:pt-36 pb-24 font-yomogi theme-toggle-styles space-y-8 md:space-y-20 max-w-7xl"
  >
    <ProgressIndicator :total="6" />
    <!-- Page Intro -->
    <section
      data-step="1"
      class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:gap-8"
    >
      <div class="bg-moko-blue-soft rounded-2xl p-6 relative md:p-8">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          1.
        </p>
        <div class="flex items-center justify-between text-dark-primary">
          <h1 class="section-card-title section-title-underline">
            {{ $t("howToUse.title") }}
          </h1>
          <Icon name="mdi:book-open-page-variant" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.intro") }}
        </p>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center"
      >
        <img
          src="/images/mockups/1-LIKE-Mockup-3.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </div>
    </section>

    <!-- Pedagogy -->
    <section
      data-step="2"
      class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div
        class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 relative md:order-1"
      >
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          2.
        </p>
        <div class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.pedagogy.title") }}
          </h2>
          <Icon name="mdi:lightbulb-outline" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type mt-2 text-dark-primary">
          {{ $t("howToUse.pedagogy.text") }}
        </p>
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center"
      >
        <img
          src="/images/mockups/1-LIKE-Mockup-2.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </div>
    </section>

    <!-- Book Structure -->
    <section
      data-step="3"
      class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div class="bg-okja-yellow-soft rounded-2xl relative p-6 md:p-8">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          3.
        </p>
        <div class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.structure.title") }}
          </h2>
          <Icon name="mdi:view-list-outline" class="text-4xl opacity-80" />
        </div>

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
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center"
      >
        <img
          src="/images/mockups/2-VERBS-Mockup-2.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </div>
    </section>

    <!-- Parents -->
    <section
      data-step="4"
      class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div class="bg-moko-blue-soft rounded-2xl relative p-6 md:p-8 md:order-1">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          4.
        </p>
        <div class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.parents.title") }}
          </h2>
          <Icon name="mdi:account-heart-outline" class="text-4xl opacity-80" />
        </div>

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
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center"
      >
        <img
          src="/images/mockups/mom-and-son-5.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </div>
    </section>

    <!-- Independent Children -->
    <section
      data-step="5"
      class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div class="bg-niko-purple-soft rounded-2xl p-6 md:p-8 relative">
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          5.
        </p>
        <div class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.children.title") }}
          </h2>
          <Icon name="mdi:school-outline" class="text-4xl opacity-80" />
        </div>

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
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center"
      >
        <img
          src="/images/mockups/dad-and-son-2.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
      </div>
    </section>

    <!-- Bilingual -->
    <section
      data-step="6"
      class="md:p-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      <div
        class="bg-okja-yellow-soft rounded-2xl p-6 md:p-8 relative md:order-1"
      >
        <p
          class="section-big-numbers absolute -top-10 right-0 md:-top-24 md:-right-8"
        >
          6.
        </p>
        <div class="flex items-center justify-between text-dark-primary">
          <h2 class="section-card-title section-title-underline">
            {{ $t("howToUse.bilingual.title") }}
          </h2>
          <Icon name="mdi:translate" class="text-4xl opacity-80" />
        </div>

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
      </div>

      <div
        class="dashed-border rounded-xl p-8 flex items-center justify-center"
      >
        <img
          src="/images/mockups/bilingual-student.webp"
          alt="mockup image of book on iPad on childrens desk"
          class="rounded-2xl"
        />
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
