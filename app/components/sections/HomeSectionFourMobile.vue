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
  <section ref="sectionRef" class="font-yomogi mt-52 px-4">
    <!-- PANEL 1 -->
    <section class="mobile-panel">
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-full mb-6"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2">
          {{ $t("homeSectionFour.series.like.title") }}
        </h2>
        <p class="text-lg leading-5">
          {{ $t("homeSectionFour.series.like.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 2 -->
    <section class="mobile-panel">
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-full mb-6"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2">
          {{ $t("homeSectionFour.series.verb.title") }}
        </h2>
        <p class="text-lg leading-5">
          {{ $t("homeSectionFour.series.verb.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 3 -->
    <section class="mobile-panel">
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-full mb-6"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2">
          {{ $t("homeSectionFour.series.adjective.title") }}
        </h2>
        <p class="text-lg leading-5">
          {{ $t("homeSectionFour.series.adjective.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 4 -->
    <section class="mobile-panel">
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-full mb-6"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2">
          {{ $t("homeSectionFour.series.dislike.title") }}
        </h2>
        <p class="text-lg leading-5">
          {{ $t("homeSectionFour.series.dislike.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 5 -->
    <section class="mobile-panel">
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-full mb-6"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2">
          {{ $t("homeSectionFour.series.friends.title") }}
        </h2>
        <p class="text-lg leading-5">
          {{ $t("homeSectionFour.series.friends.text") }}
        </p>
      </div>
    </section>
  </section>
</template>
