<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!sectionRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".mobile-panel");

    panels.forEach((panel) => {
      const image = panel.querySelector(".mobile-image");
      const text = panel.querySelector(".mobile-text");

      gsap.fromTo(
        image,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        text,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>
<template>
  <section
    ref="sectionRef"
    id="s4"
    class="section-wrapper theme-toggle-styles space-y-8 max-w-7xl mx-auto"
  >
    <div class="text-center">
      <h2 class="section-title-type">
        {{ $t("home.seriesPreview.title") }}
      </h2>
      <p class="section-body-type mt-2">
        {{ $t("home.seriesPreview.subtitle") }}
      </p>
    </div>
    <!-- PANEL 1 -->
    <section id="card-11" data-step="11" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        11.
      </p>
      <img
        src="/images/mockups/0-INTRO-Mockup-1.webp"
        class="mobile-image w-3/5 ml-auto md:w-full"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          11.
        </p>
        <h2 class="section-card-title section-title-underline">
          {{ $t("home.seriesPreview.series.phrases.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("home.seriesPreview.series.phrases.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 2 -->
    <section id="card-12" data-step="12" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        12.
      </p>
      <img
        src="/images/mockups/1-LIKE-Book-Mockup-1.webp"
        class="mobile-image w-3/5 ml-auto md:w-full md:order-2"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          12.
        </p>
        <h2 class="section-card-title section-title-underline">
          {{ $t("home.seriesPreview.series.like.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("home.seriesPreview.series.like.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 3 -->
    <section id="card-13" data-step="13" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        13.
      </p>
      <img
        src="/images/mockups/2-VERBS-Mockup-1.webp"
        class="mobile-image w-3/5 ml-auto md:w-full"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          13.
        </p>
        <h2 class="section-card-title section-title-underline">
          {{ $t("home.seriesPreview.series.verb.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("home.seriesPreview.series.verb.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 5 -->
    <section id="card-14" data-step="14" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        14.
      </p>
      <img
        src="/images/mockups/3-ADJ-Mockup-1.webp"
        class="mobile-image w-3/5 ml-auto md:w-full md:order-2"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          14.
        </p>
        <h2 class="section-card-title section-title-underline">
          {{ $t("home.seriesPreview.series.adjective.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("home.seriesPreview.series.adjective.text") }}
        </p>
      </div>
    </section>
    <!-- PANEL 6 -->
    <section id="card-15" data-step="15" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        15.
      </p>
      <img
        src="/images/mockups/4-NOUNS-Mockup-1.webp"
        class="mobile-image w-3/5 ml-auto md:w-full"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          15.
        </p>
        <h2 class="section-card-title section-title-underline">
          {{ $t("home.seriesPreview.series.noun.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("home.seriesPreview.series.noun.text") }}
        </p>
      </div>
    </section>
  </section>
</template>
