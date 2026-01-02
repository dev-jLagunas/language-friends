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
        }
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
        }
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
        {{ $t("homeSectionFour.title") }}
      </h2>
      <p class="section-body-type mt-2">
        {{ $t("homeSectionFour.subtitle") }}
      </p>
    </div>
    <!-- PANEL 1 -->
    <section id="card-10" data-step="10" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        10.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-3/5 ml-auto md:w-full"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          10.
        </p>
        <h2 class="section-card-title">
          {{ $t("homeSectionFour.series.like.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("homeSectionFour.series.like.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 2 -->
    <section id="card-11" data-step="11" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        11.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-3/5 ml-auto md:w-full md:order-2"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          11.
        </p>
        <h2 class="section-card-title">
          {{ $t("homeSectionFour.series.verb.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("homeSectionFour.series.verb.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 3 -->
    <section id="card-12" data-step="12" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        12.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-3/5 ml-auto md:w-full"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          12.
        </p>
        <h2 class="section-card-title">
          {{ $t("homeSectionFour.series.adjective.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("homeSectionFour.series.adjective.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 5 -->
    <section id="card-13" data-step="13" class="mobile-panel four-story-card">
      <p
        class="section-big-numbers absolute text-dark-primary/50 top-20 md:hidden dark:text-light-primary/50"
      >
        13.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-3/5 ml-auto md:w-full md:order-2"
        alt="mockup of book with ipad"
      />
      <div class="mobile-text md:order-1">
        <p
          class="section-big-numbers text-dark-primary/50 hidden md:block dark:text-light-primary/50"
        >
          13.
        </p>
        <h2 class="section-card-title">
          {{ $t("homeSectionFour.series.friends.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("homeSectionFour.series.friends.text") }}
        </p>
      </div>
    </section>
  </section>
</template>
