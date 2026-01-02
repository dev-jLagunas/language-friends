<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref<HTMLElement | null>(null); // Reference for scoping
let ctx: gsap.Context; // GSAP Context for cleanup

onMounted(() => {
  // Scope GSAP to this component to avoid conflicts
  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    // Create a timeline that links to the scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-wrapper",
        pin: true, // Pin the container while stacking
        start: "top top",
        end: () => "+=" + window.innerHeight * (panels.length - 1), // Scroll distance relative to number of slides
        scrub: 1, // Smooth scrubbing
        // markers: true, // Uncomment to debug start/end points
      },
    });

    // Loop through panels, SKIPPING the first one (index 0)
    panels.forEach((panel, i) => {
      if (i === 0) return; // The first panel acts as the base layer

      // 1. Set initial state: pushed down 100%
      gsap.set(panel, { yPercent: 100 });

      // 2. Animate it up to 0%
      // Since this is a timeline, these happen sequentially by default
      tl.to(panel, {
        yPercent: 0,
        ease: "none",
        duration: 1,
      });
    });
  }, main.value as Element); // Scope to main.value
});

onUnmounted(() => {
  ctx.revert(); // Clean up GSAP when component is destroyed
});
</script>

<template>
  <div ref="main" class="font-yomogi">
    <section class="story-wrapper text-dark-primary">
      <!-- Slide 1 -->
      <section
        class="panel relative bg-light-primary dark:bg-dark-secondary my-8 md:grid md:grid-cols-2 md:place-items-center"
      >
        <h3 class="section-title-type text-center mb-4 md:absolute md:top-14">
          About Us
        </h3>
        <article
          class="bg-moko-blue-soft px-4 py-8 mx-4 mb-4 rounded-2xl md:h-2/3 md:mb-0 md:grid md:grid-cols-1"
        >
          <div>
            <h2 class="section-card-title section-title-underline">
              {{ $t("about.title") }}
            </h2>
            <p class="section-body-type">{{ $t("about.intro") }}</p>
          </div>
          <img
            src="/images/mockups/teacher-and-child.png"
            alt=""
            class="h-72 w-full object-cover mt-4 rounded-2xl"
          />
        </article>
        <article
          class="bg-niko-purple-soft px-4 py-8 mx-4 rounded-2xl md:h-2/3"
        >
          <h3 class="section-card-title section-title-underline">
            {{ $t("about.philosophy.title") }}
          </h3>
          <p class="section-body-type">{{ $t("about.philosophy.text") }}</p>
        </article>
      </section>

      <!-- Slide 2 -->
      <section
        class="panel bg-light-primary dark:bg-dark-secondary my-8 md:grid md:grid-cols-2 md:place-items-center"
      >
        <article
          class="bg-okja-yellow-soft px-4 py-8 mx-4 mb-4 rounded-2xl md:h-2/3 md:mb-0"
        >
          <h2 class="section-card-title section-title-underline">
            {{ $t("about.learning.title") }}
          </h2>
          <p class="section-body-type">{{ $t("about.learning.text") }}</p>
        </article>
        <article class="bg-moko-blue-soft px-4 py-8 mx-4 rounded-2xl md:h-2/3">
          <h3 class="section-card-title section-title-underline">
            {{ $t("about.characters.title") }}
          </h3>
          <p class="section-body-type">{{ $t("about.characters.text") }}</p>
        </article>
      </section>

      <!-- Slide 3 -->
      <section
        class="panel bg-light-primary dark:bg-dark-secondary my-8 md:grid md:grid-cols-2 md:place-items-center"
      >
        <article
          class="bg-niko-purple-soft px-4 py-8 mx-4 mb-4 rounded-2xl md:h-2/3 md:mb-0"
        >
          <h2 class="section-card-title">{{ $t("about.parents.title") }}</h2>
          <p class="section-body-type">{{ $t("about.parents.text") }}</p>
        </article>
        <article
          class="bg-okja-yellow-soft px-4 py-8 mx-4 rounded-2xl md:h-2/3"
        >
          <h3 class="section-card-title">{{ $t("about.closing.title") }}</h3>
          <p class="section-body-type">{{ $t("about.closing.text") }}</p>
        </article>
      </section>
    </section>
  </div>
</template>

<style scoped>
.story-wrapper {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
