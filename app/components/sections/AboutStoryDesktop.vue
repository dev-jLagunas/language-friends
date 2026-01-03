<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = ref<HTMLElement | null>(null);
let ctx: gsap.Context;

onMounted(() => {
  ctx = gsap.context(() => {
    const containers = gsap.utils.toArray<HTMLElement>(".about-card-container");

    containers.forEach((container, index) => {
      const textEl = container.children[0] as HTMLElement | undefined;
      const imageEl = container.children[1] as HTMLElement | undefined;

      if (!textEl || !imageEl) return;

      gsap.from(textEl, {
        x: index % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
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
          trigger: container,
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
  <section ref="root" class="about-wrapper text-dark-primary md:mt-16">
    <!-- Intro -->
    <div class="about-card-container">
      <div class="bg-moko-blue-soft rounded-2xl p-8 md:-rotate-3">
        <p
          class="section-big-numbers text-dark-primary/50 absolute -top-10 right-0 md:-top-16"
        >
          1.
        </p>
        <Icon name="mdi:paw" class="text-2xl md:text-3xl opacity-80" />

        <h2 class="section-card-title section-title-underline">
          {{ $t("about.title") }}
        </h2>
        <p class="section-body-type mt-2">
          {{ $t("about.intro") }}
        </p>
      </div>

      <img
        src="/images/mockups/teacher-and-child.png"
        class="rounded-2xl object-cover w-full dashed-border rotate-6"
      />
    </div>

    <!-- Philosophy -->
    <div class="about-card-container">
      <img
        src="/images/mockups/dad-and-son1.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full order-last -rotate-6 dashed-border md:order-first"
      />

      <div
        class="bg-niko-purple-soft rounded-2xl md:rounded-3xl p-6 md:rotate-3 md:p-10"
      >
        <p
          class="section-big-numbers text-dark-primary/50 absolute -top-10 right-0 md:-top-16"
        >
          2.
        </p>
        <Icon name="tabler:cat" class="text-2xl md:text-3xl opacity-80" />

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.philosophy.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.philosophy.text") }}
        </p>
      </div>
    </div>

    <!-- Learning -->
    <div class="about-card-container">
      <div
        class="bg-okja-yellow-soft rounded-2xl md:rounded-3xl md:-rotate-3 p-6 md:p-10"
      >
        <p
          class="section-big-numbers text-dark-primary/50 absolute -top-10 right-0 md:-top-16"
        >
          3.
        </p>
        <Icon name="fa6-solid:cat" class="text-2xl md:text-3xl opacity-80" />

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.learning.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.learning.text") }}
        </p>
      </div>

      <img
        src="/images/mockups/mon-and-son1.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full rotate-3 dashed-border"
      />
    </div>

    <!-- Characters -->
    <div class="about-card-container">
      <img
        src="/images/mockups/book-mockup-3.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full order-last -rotate-6 dashed-border md:order-first"
      />

      <div
        class="bg-moko-blue-soft rounded-2xl md:rotate-3 md:rounded-3xl p-6 md:p-10"
      >
        <p
          class="section-big-numbers text-dark-primary/50 absolute -top-10 right-0 md:-top-16"
        >
          4.
        </p>
        <Icon name="mdi:cat" class="text-2xl md:text-3xl opacity-80" />

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.characterss.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.characterss.text") }}
        </p>
      </div>
    </div>

    <!-- Parents -->
    <div class="about-card-container">
      <div
        class="bg-niko-purple-soft rounded-2xl md:-rotate-3 md:rounded-3xl p-6 md:p-10"
      >
        <p
          class="section-big-numbers text-dark-primary/50 absolute -top-10 right-0 md:-top-16"
        >
          5.
        </p>
        <Icon name="mdi:paw" class="text-2xl md:text-3xl opacity-80" />

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.parents.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.parents.text") }}
        </p>
      </div>

      <img
        src="/images/mockups/mom-and-son3.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full rotate-6 dashed-border"
      />
    </div>

    <!-- Closing -->
    <div class="about-card-container">
      <img
        src="/images/mockups/mom-and-son4.png"
        class="rounded-2xl md:rounded-3xl object-cover w-full order-last -rotate-6 dashed-border md:order-first"
      />

      <div
        class="bg-okja-yellow-soft rounded-2xl md:rotate-3 md:rounded-3xl p-6 md:p-10"
      >
        <p
          class="section-big-numbers text-dark-primary/50 absolute -top-10 right-0 md:-top-16"
        >
          6.
        </p>
        <Icon name="mdi:cat" class="text-2xl md:text-3xl opacity-80" />

        <h3 class="section-card-title section-title-underline">
          {{ $t("about.closing.title") }}
        </h3>
        <p class="section-body-type mt-3 md:mt-4">
          {{ $t("about.closing.text") }}
        </p>
      </div>
    </div>
  </section>
</template>
