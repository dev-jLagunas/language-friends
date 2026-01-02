<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const sections = document.querySelectorAll(".story-panel");

  sections.forEach((section) => {
    const title = section.querySelector("h3");
    const image = section.querySelector("figure");
    const text = section.querySelector("p");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "50% 75%",
        toggleActions: "play none none none",
      },
    });

    // whole card enters slightly
    tl.from(section, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
    });

    // title
    tl.from(
      title,
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // image (slight scale + fade)
    tl.from(
      image,
      {
        opacity: 0,
        scale: 0.96,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // text
    tl.from(
      text,
      {
        opacity: 0,
        y: 16,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );
  });
});
</script>

<template>
  <section id="s2" class="section-wrapper">
    <!-- Header -->
    <header class="text-center mb-8">
      <h2 class="section-title-type">
        {{ $t("homeSectionTwo.sectionTitle") }}
      </h2>
      <p class="mt-2 section-body-type">
        {{ $t("homeSectionTwo.sectionSubtitle") }}
      </p>
    </header>
    <div class="space-y-8 md:space-y-20">
      <!-- Section 1 -->
      <section id="card-4" data-step="4" class="story-panel two-story-card">
        <figure class="">
          <p
            class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 md:absolute md:-top-24 md:-left-4"
          >
            4.
          </p>
          <img
            src="/images/everyone/cats-together-school.png"
            class="mx-auto w-1/2 mb-4 md:w-3/4 bg-moko-blue-soft rounded-2xl xl:w-1/2"
            alt="cat characters in a school setting"
          />
        </figure>
        <div class="">
          <h3 class="section-card-title section-title-underline">
            {{ $t("homeSectionTwo.sectionA.title") }}
          </h3>
          <p class="animate section-body-type">
            {{ $t("homeSectionTwo.sectionA.textA") }}
          </p>
          <p class="animate mt-2 section-body-type">
            {{ $t("homeSectionTwo.sectionA.textB") }}
          </p>
        </div>
      </section>

      <!-- Section 2 -->
      <section id="card-5" data-step="5" class="story-panel two-story-card">
        <figure class="">
          <p
            class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 md:absolute md:-top-24 md:-left-4"
          >
            5.
          </p>
          <img
            src="/images/everyone/cats-together-bike.png"
            class="mx-auto mb-4 w-1/2 md:w-3/4 bg-niko-purple-soft rounded-2xl xl:w-1/2"
            alt="cat characters riding bikes"
          />
        </figure>
        <div class="">
          <h3 class="section-card-title section-title-underline">
            {{ $t("homeSectionTwo.sectionB.title") }}
          </h3>
          <p class="animate section-body-type">
            {{ $t("homeSectionTwo.sectionB.textA") }}
          </p>
          <p class="animate mt-2 section-body-type">
            {{ $t("homeSectionTwo.sectionB.textB") }}
          </p>
        </div>
      </section>

      <!-- Section 3 -->
      <section id="card-6" data-step="6" class="story-panel two-story-card">
        <figure class="">
          <p
            class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 md:absolute md:-top-24 md:-left-4"
          >
            6.
          </p>
          <img
            src="/images/everyone/cats-together-hug.png"
            class="mx-auto mb-4 w-1/2 md:w-3/4 bg-okja-yellow-soft rounded-2xl xl:w-1/2"
            alt="cat characters hugging"
          />
        </figure>
        <div class="">
          <h3 class="section-card-title section-title-underline">
            {{ $t("homeSectionTwo.sectionC.title") }}
          </h3>
          <p class="animate section-body-type">
            {{ $t("homeSectionTwo.sectionC.textA") }}
          </p>
          <p class="animate mt-2 section-body-type">
            {{ $t("homeSectionTwo.sectionC.textB") }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
