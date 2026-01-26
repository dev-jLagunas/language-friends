<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const cards = document.querySelectorAll(".story-card");

  cards.forEach((card) => {
    const items = card.querySelectorAll("h3, p, img");

    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      },
    );
  });
});
</script>

<template>
  <section id="s1" class="section-wrapper">
    <div class="flex-col-center-center gap-8 md:gap-20">
      <!-- Header -->
      <div class="text-center">
        <h2 class="section-title-type">
          {{ $t("home.intro.title") }}
        </h2>
        <p class="mt-2 section-body-type">
          {{ $t("tour.intro") }}
        </p>
      </div>
      <!-- Card 1 -->
      <section
        id="card-1"
        data-step="1"
        class="story-card bg-moko-blue-soft one-intro-card"
      >
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 md:absolute md:-top-16 md:right-0"
        >
          1.
        </p>
        <img
          src="/images/mockups/1-LIKE-Mockup-3.webp"
          class="one-intro-card-img my-2"
          alt="mother and son mockup"
        />
        <div class="my-4 md:px-4 md:my-0 md:relative">
          <h3 class="section-card-title section-title-underline">
            {{ $t("home.intro.cards.what.title") }}
          </h3>
          <p class="section-body-type">
            {{ $t("home.intro.cards.what.text") }}
          </p>
          <p class="section-body-type mt-2">
            {{ $t("home.intro.cards.what.extra") }}
          </p>
        </div>
      </section>
      <!-- Card 2 -->
      <section
        id="card-2"
        data-step="2"
        class="story-card bg-niko-purple-soft one-intro-card"
      >
        <p
          class="section-big-numbers text-dark-primary/50 md:absolute md:-top-16 md:right-0 dark:text-light-primary/50"
        >
          2.
        </p>
        <img
          src="/images/mockups/mockup-1-ipad.png"
          class="one-intro-card-img my-2"
          alt="mother and son reading mockup"
        />
        <div class="my-4 md:px-4 md:my-0 md:relative">
          <h3 class="section-card-title section-title-underline">
            {{ $t("home.intro.cards.who.title") }}
          </h3>
          <p class="section-body-type">
            {{ $t("home.intro.cards.who.text") }}
          </p>
          <p class="section-body-type mt-2">
            {{ $t("home.intro.cards.who.extra") }}
          </p>
        </div>
      </section>
      <!-- Card 3 -->
      <section
        id="card-3"
        data-step="3"
        class="story-card bg-okja-yellow-soft one-intro-card"
      >
        <p
          class="section-big-numbers text-dark-primary/50 md:absolute md:-top-16 md:right-0 dark:text-light-primary/50"
        >
          3.
        </p>
        <img
          src="/images/mockups/mockup-2-ipad.png"
          class="one-intro-card-img"
          alt="mother and son reading together mockup"
        />
        <div class="my-4 md:px-4 md:my-0 md:relative">
          <h3 class="section-card-title section-title-underline">
            {{ $t("home.intro.cards.why.title") }}
          </h3>
          <p class="section-body-type">{{ $t("home.intro.cards.why.text") }}</p>
          <p class="section-body-type mt-2">
            {{ $t("home.intro.cards.why.extra") }}
          </p>
        </div>
      </section>
      <!-- Card 4 -->
      <section
        id="card-4"
        data-step="4"
        class="story-card bg-moko-blue-soft one-intro-card"
      >
        <p
          class="section-big-numbers text-dark-primary/50 md:absolute md:-top-16 md:right-0 dark:text-light-primary/50"
        >
          4.
        </p>
        <img
          src="/images/mockups/dad-mockup-ipad-1.png"
          class="one-intro-card-img my-2"
          alt="mother and son mockup"
        />
        <div class="my-4 md:px-4 md:my-0 md:relative">
          <h3 class="section-card-title section-title-underline">
            {{ $t("home.intro.cards.how.title") }}
          </h3>
          <p class="section-body-type">
            {{ $t("home.intro.cards.how.text") }}
          </p>
          <p class="section-body-type mt-2">
            {{ $t("home.intro.cards.how.extra") }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>
<style scoped></style>
