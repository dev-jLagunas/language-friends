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
        ".character-text",
      ) as HTMLElement | null;
      const imageEl = section.querySelector(
        ".character-image",
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
  <main
    ref="root"
    class="mx-auto page-paddings pb-24 font-yomogi theme-toggle-styles max-w-7xl"
  >
    <ProgressIndicator :total="3" />

    <!-- Moko -->
    <article
      id="character-moko"
      data-step="1"
      class="character-section character-article-wrapper"
    >
      <section
        class="character-text bg-moko-blue-soft relative rounded-2xl p-4 md:p-8"
      >
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24"
        >
          1.
        </p>
        <header class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.profiles.moko.name") }}
          </h2>
          <Icon name="mdi:paw" class="text-4xl opacity-80" />
        </header>
        <p class="section-body-type">
          {{ $t("characters.profiles.moko.learningRole") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("characters.profiles.moko.realWorld") }}
        </p>
        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.profiles.moko.personality") }}
        </p>
      </section>
      <img
        src="/images/moko/moko-collage-1.webp"
        class="character-image dashed-border rounded-2xl"
      />
    </article>

    <!-- Niko -->
    <article
      data-step="2"
      id="character-niko"
      class="character-section character-article-wrapper"
    >
      <section
        class="character-text relative bg-niko-purple-soft rounded-2xl p-4 md:p-8 md:order-2"
      >
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24"
        >
          2.
        </p>
        <header class="flex-row-between-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.profiles.niko.name") }}
          </h2>
          <Icon name="mdi:cat" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type">
          {{ $t("characters.profiles.niko.learningRole") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("characters.profiles.niko.realWorld") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.profiles.niko.personality") }}
        </p>
      </section>

      <img
        src="/images/niko/niko-collage-1.webp"
        class="character-image dashed-border rounded-2xl"
      />
    </article>

    <!-- Okja -->
    <article
      data-step="3"
      id="character-okja"
      class="character-section character-article-wrapper"
    >
      <div
        class="character-text relative bg-okja-yellow-soft rounded-2xl p-4 md:p-8 text-dark-primary"
      >
        <p
          class="section-big-numbers text-dark-primary/50 dark:text-light-primary/50 absolute -top-10 right-0 md:-top-24"
        >
          3.
        </p>
        <header class="flex justify-between items-center">
          <h2 class="section-card-title section-title-underline">
            {{ $t("characters.profiles.okja.name") }}
          </h2>
          <Icon name="mdi:paw" class="text-4xl opacity-80" />
        </header>

        <p class="section-body-type">
          {{ $t("characters.profiles.okja.learningRole") }}
        </p>
        <p class="section-body-type mt-2 pb-2">
          {{ $t("characters.profiles.okja.realWorld") }}
        </p>

        <p
          class="section-body-type mt-2 border-t border-dark-primary/50 pt-2 border-dashed"
        >
          {{ $t("characters.profiles.okja.personality") }}
        </p>
      </div>

      <img
        src="/images/okja/okja-collage-1.webp"
        class="character-image dashed-border rounded-2xl"
      />
    </article>

    <!-- Closing -->
    <footer class="text-center my-8">
      <p class="section-body-type">
        {{ $t("characters.closing.text") }}
      </p>
    </footer>
  </main>
</template>
