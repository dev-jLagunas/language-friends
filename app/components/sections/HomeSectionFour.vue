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
  <section ref="sectionRef" id="s4" class="font-yomogi px-4 space-y-8 xs:px-8">
    <!-- PANEL 1 -->
    <section class="mobile-panel text-start relative">
      <p
        class="section-big-numbers left-0 top-10 absolute dark:text-light-primary"
      >
        10.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-1/2 ml-auto"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2 xs:text-3xl">
          {{ $t("homeSectionFour.series.like.title") }}
        </h2>
        <p class="text-lg leading-5 xs:text-2xl xs:leading-7">
          {{ $t("homeSectionFour.series.like.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 2 -->
    <section class="mobile-panel relative">
      <p
        class="section-big-numbers right-0 top-10 absolute dark:text-light-primary"
      >
        11.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-1/2"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2 xs:text-3xl">
          {{ $t("homeSectionFour.series.verb.title") }}
        </h2>
        <p class="text-lg leading-5 xs:text-2xl xs:leading-7">
          {{ $t("homeSectionFour.series.verb.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 3 -->
    <section class="mobile-panel relative">
      <p
        class="section-big-numbers left-0 top-10 absolute dark:text-light-primary"
      >
        12.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-1/2 ml-auto"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2 xs:text-3xl">
          {{ $t("homeSectionFour.series.adjective.title") }}
        </h2>
        <p class="text-lg leading-5 xs:text-2xl xs:leading-7">
          {{ $t("homeSectionFour.series.adjective.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 4 -->
    <section class="mobile-panel relative">
      <p
        class="section-big-numbers right-0 top-10 absolute dark:text-light-primary"
      >
        13.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-1/2"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2 xs:text-3xl">
          {{ $t("homeSectionFour.series.dislike.title") }}
        </h2>
        <p class="text-lg leading-5 xs:text-2xl xs:leading-7">
          {{ $t("homeSectionFour.series.dislike.text") }}
        </p>
      </div>
    </section>

    <!-- PANEL 5 -->
    <section class="mobile-panel relative">
      <p
        class="section-big-numbers left-0 top-10 absolute dark:text-light-primary"
      >
        14.
      </p>
      <img
        src="/images/mockups/book-mockup-2.png"
        class="mobile-image w-1/2 ml-auto"
        alt=""
      />
      <div class="mobile-text">
        <h2 class="font-bold text-2xl mb-2 xs:text-3xl">
          {{ $t("homeSectionFour.series.friends.title") }}
        </h2>
        <p class="text-lg leading-5 xs:text-2xl xs:leading-7">
          {{ $t("homeSectionFour.series.friends.text") }}
        </p>
      </div>
    </section>
    <div class="mx-auto w-fit">
      <button class="dashed-btn">See All Books</button>
    </div>
  </section>
</template>
