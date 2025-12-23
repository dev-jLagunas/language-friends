<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const container = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!container.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel");

    panels.forEach((panel) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "+=60%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      tl.from(
        panel.querySelector("h3"),
        {
          y: 40,
          opacity: 0,
          ease: "power3.out",
          duration: 0.6,
        },
        0
      )
        .from(
          panel.querySelector("p"),
          {
            y: 30,
            opacity: 0,
            ease: "power3.out",
            duration: 0.6,
          },
          0.15
        )
        .from(
          panel.querySelector("img"),
          {
            y: 20,
            opacity: 0,
            scale: 0.96,
            ease: "power3.out",
            duration: 0.6,
          },
          0.3
        )
        .from(
          panel.querySelector("button"),
          {
            y: 10,
            opacity: 0,
            ease: "power3.out",
            duration: 0.4,
          },
          0.45
        );
    });
  }, container.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="container" class="font-yomogi">
    <section
      class="panel min-h-screen flex items-center bg-moko-blue/50 relative"
    >
      <div class="panel__content px-8 md:w-2/3">
        <h3 class="font-bold text-2xl md:text-4xl mb-4">
          {{ $t("homeSectionTwo.sectionA.title") }}
        </h3>
        <p class="md:text-2xl mb-6">
          {{ $t("homeSectionTwo.sectionA.text") }}
        </p>
        <img
          src="/images/everyone/cats-together-school.png"
          class="w-1/2 mb-6"
        />
        <button class="border border-dashed px-6 py-1 md:text-2xl">
          {{ $t("ui.cta") }}
        </button>
      </div>
    </section>

    <section
      class="panel min-h-screen flex items-center bg-niko-purple/50 relative"
    >
      <div class="panel__content px-8 md:w-2/3">
        <h3 class="font-bold text-2xl md:text-4xl mb-4">
          {{ $t("homeSectionTwo.sectionB.title") }}
        </h3>
        <p class="md:text-2xl mb-6">
          {{ $t("homeSectionTwo.sectionB.text") }}
        </p>
        <img src="/images/everyone/cats-together-hug.png" class="w-1/2 mb-6" />
        <button class="border border-dashed px-6 py-1 md:text-2xl">
          {{ $t("ui.cta") }}
        </button>
      </div>
    </section>

    <section
      class="panel min-h-screen flex items-center bg-okja-yellow/50 relative"
    >
      <div class="panel__content px-8 md:w-2/3">
        <h3 class="font-bold text-2xl md:text-4xl mb-4">
          {{ $t("homeSectionTwo.sectionC.title") }}
        </h3>
        <p class="md:text-2xl mb-6">
          {{ $t("homeSectionTwo.sectionC.text") }}
        </p>
        <img src="/images/everyone/cats-with-sign.png" class="w-1/2 mb-6" />
        <button class="border border-dashed px-6 py-1 md:text-2xl">
          {{ $t("ui.cta") }}
        </button>
      </div>
    </section>
  </section>
</template>

<style scoped></style>
