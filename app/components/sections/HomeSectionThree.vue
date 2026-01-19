<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const cards = gsap.utils.toArray<HTMLElement>(".card");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  });
});
</script>

<template>
  <section id="s3" class="wrapper theme-toggle-styles section-wrapper">
    <!-- Intro Card -->
    <div class="text-center">
      <h2 class="section-title-type mb-2">
        {{ $t("home.charactersPreview.title") }}
      </h2>
      <p class="section-body-type">
        {{ $t("home.charactersPreview.intro") }}
      </p>
      <img
        src="/images/everyone/cats-wall-sitting.webp"
        alt="characters together sitting"
        class="mx-auto md:w-1/2 lg:w-1/3"
      />
    </div>

    <!-- Moko -->
    <div
      id="card-8"
      data-step="8"
      class="card bg-moko-blue-soft three-story-card"
    >
      <p
        class="section-big-numbers text-dark-primary/50 md:absolute md:-top-16 md:right-0 dark:text-light-primary/50"
      >
        8.
      </p>
      <div class="">
        <img
          src="/images/moko/moko-hello.webp"
          alt="image of Moko cat character"
          class="w-1/3 mx-auto md:w-3/4 lg:w-1/2"
        />
        <h2
          class="section-card-title mx-auto section-title-underline md:hidden"
        >
          {{ $t("home.charactersPreview.cards.moko.name") }}
        </h2>
      </div>
      <div>
        <h2 class="section-card-title section-title-underline hidden md:block">
          {{ $t("home.charactersPreview.cards.moko.name") }}
        </h2>
        <p class="section-body-type">
          {{ $t("home.charactersPreview.cards.moko.textA") }}
        </p>

        <p class="section-body-type mt-2">
          {{ $t("home.charactersPreview.cards.moko.textB") }}
        </p>
      </div>
    </div>

    <!-- Niko -->
    <div
      id="card-9"
      data-step="9"
      class="card bg-niko-purple-soft three-story-card"
    >
      <p
        class="section-big-numbers text-dark-primary/50 md:absolute md:-top-16 md:right-0 dark:text-light-primary/50"
      >
        9.
      </p>
      <div class="">
        <img
          src="/images/niko/niko-hello.webp"
          alt="image of Niko cat character"
          class="w-1/3 mx-auto md:w-3/4 lg:w-1/2"
        />
        <h2
          class="section-card-title mx-auto section-title-underline md:hidden"
        >
          {{ $t("home.charactersPreview.cards.niko.name") }}
        </h2>
      </div>
      <div>
        <h2 class="section-card-title section-title-underline hidden md:block">
          {{ $t("home.charactersPreview.cards.niko.name") }}
        </h2>
        <p class="section-body-type">
          {{ $t("home.charactersPreview.cards.niko.textA") }}
        </p>

        <p class="section-body-type mt-2">
          {{ $t("home.charactersPreview.cards.niko.textB") }}
        </p>
      </div>
    </div>

    <!-- Okja -->
    <div
      id="card-10"
      data-step="10"
      class="card bg-okja-yellow-soft three-story-card"
    >
      <p
        class="section-big-numbers text-dark-primary/50 md:absolute md:-top-16 md:right-0 dark:text-light-primary/50"
      >
        10.
      </p>
      <div class="">
        <img
          src="/images/okja/okja-hello.webp"
          alt="image of Okja cat character"
          class="w-1/3 mx-auto md:w-3/4 lg:w-1/2"
        />
        <h2
          class="section-card-title mx-auto section-title-underline md:hidden"
        >
          {{ $t("home.charactersPreview.cards.okja.name") }}
        </h2>
      </div>
      <div>
        <h2 class="section-card-title section-title-underline hidden md:block">
          {{ $t("home.charactersPreview.cards.okja.name") }}
        </h2>
        <p class="section-body-type">
          {{ $t("home.charactersPreview.cards.okja.textA") }}
        </p>

        <p class="section-body-type mt-2">
          {{ $t("home.charactersPreview.cards.okja.textB") }}
        </p>
      </div>
    </div>
    <img
      src="/images/everyone/cats-peace-sign.webp"
      alt="characters together peace sign"
      class="mx-auto md:w-1/2 lg:w-1/3"
    />
  </section>
</template>

<style scoped></style>
