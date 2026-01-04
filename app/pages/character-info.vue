<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".character-section");

    sections.forEach((section, index) => {
      const textEl = section.querySelector(
        ".character-text"
      ) as HTMLElement | null;
      const imageEl = section.querySelector(
        ".character-image"
      ) as HTMLElement | null;

      if (!textEl || !imageEl) return;

      gsap.from(textEl, {
        x: index % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(imageEl, {
        x: index % 2 === 0 ? 60 : -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, root.value as Element);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <section
    ref="root"
    class="mx-auto pb-24 px-4 md:pt-24 font-yomogi theme-toggle-styles space-y-8 md:space-y-16"
  >
    <!-- Page Intro -->
    <header class="dashed-border rounded-2xl">
      <h1 class="section-card-title section-title-underline">
        {{ $t("characters.title") }}
      </h1>
      <p class="section-body-type">
        {{ $t("characters.intro") }}
      </p>
    </header>

    <!-- Moko -->
    <section
      class="character-section text-dark-primary grid grid-cols-1 mt-4 md:grid-cols-2 gap-10 items-center"
    >
      <div
        class="character-text bg-moko-blue-soft relative rounded-2xl p-4 md:p-8"
      >
        <div class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.moko.name") }}
          </h2>
          <Icon name="mdi:paw" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type">
          {{ $t("homeSectionThree.moko.textA") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("homeSectionThree.moko.textB") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.moko.learningRole") }}
        </p>
      </div>

      <img
        src="/images/moko/moko-collage-1.png"
        class="character-image dashed-border rounded-2xl rotate-12 my-8"
      />
    </section>

    <!-- Niko -->
    <section
      class="character-section grid grid-cols-1 mt-4 md:grid-cols-2 gap-10 items-center"
    >
      <div
        class="character-text bg-niko-purple-soft rounded-2xl p-4 md:p-8 md:order-2 text-dark-primary"
      >
        <div class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.niko.name") }}
          </h2>
          <Icon name="mdi:cat" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type">
          {{ $t("homeSectionThree.niko.textA") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("homeSectionThree.niko.textB") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.niko.learningRole") }}
        </p>
      </div>

      <img
        src="/images/niko/niko-collage-1.png"
        class="character-image dashed-border rounded-2xl -rotate-12 my-8"
      />
    </section>

    <!-- Okja -->
    <section
      class="character-section grid grid-cols-1 mt-4 md:grid-cols-2 gap-10 items-center"
    >
      <div
        class="character-text bg-okja-yellow-soft rounded-2xl p-4 md:p-8 text-dark-primary"
      >
        <div class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.okja.name") }}
          </h2>
          <Icon name="mdi:paw" class="text-4xl opacity-80" />
        </div>

        <p class="section-body-type">
          {{ $t("homeSectionThree.okja.textA") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("homeSectionThree.okja.textB") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.okja.learningRole") }}
        </p>
      </div>

      <img
        src="/images/okja/okja-collage-1.png"
        class="character-image dashed-border rounded-2xl rotate-12 my-8"
      />
    </section>

    <!-- Closing -->
    <footer class="text-center my-8">
      <p class="section-body-type">
        {{ $t("characters.closing.text") }}
      </p>
    </footer>
  </section>
</template>
