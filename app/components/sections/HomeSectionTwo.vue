<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const container = ref<HTMLElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!container.value || !wrapper.value) return;

  gsap.registerPlugin(ScrollTrigger);

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  ctx = gsap.context(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".panel", wrapper.value!);
    const totalWidth = panels.reduce((acc, p) => acc + p.offsetWidth, 0);

    gsap.to(wrapper.value!, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container.value!,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        snap: isDesktop
          ? {
              snapTo: 1 / (panels.length - 1),
              duration: 0.2,
              ease: "ease",
            }
          : false,
      },
    });
  }, container.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="container" class="relative overflow-hidden">
    <div ref="wrapper" class="wrapper font-yomogi leading-5">
      <section
        class="panel section place-content-center relative bg-moko-blue/50"
      >
        <h2
          class="panel__number opacity-30 font-extralight text-9xl dark:text-light-primary desktop:text-9x absolute -top-1 left-4 md:left-10"
        >
          4
        </h2>

        <div class="panel__content px-8 md:mx-8 desktop:w-2/3">
          <h3 class="font-bold text-2xl leading-6 mb-2 md:text-4xl md:mb-4">
            {{ $t("homeSectionTwo.sectionA.title") }}
          </h3>
          <p class="md:text-2xl">
            {{ $t("homeSectionTwo.sectionA.text") }}
          </p>

          <img
            src="/images/everyone/cats-together-school.png"
            alt=""
            class="w-3/4 md:w-1/2 max-w-95"
          />

          <button
            class="border border-dashed border-dark-primary px-6 py-1 mr-auto"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </section>

      <section
        class="panel section place-content-center bg-niko-purple/50 relative"
      >
        <h2
          class="opacity-30 font-extralight text-9xl dark:text-light-primary desktop:text-9xl absolute -top-1 left-4"
        >
          5
        </h2>

        <div class="panel__content md:text-4xl px-8 md:mx-8 desktop:w-2/3">
          <h3 class="font-bold text-2xl leading-6 mb-2 md:text-4xl md:mb-4">
            {{ $t("homeSectionTwo.sectionB.title") }}
          </h3>
          <p class="md:text-2xl">
            {{ $t("homeSectionTwo.sectionB.text") }}
          </p>

          <img
            src="/images/everyone/cats-together-hug.png"
            alt=""
            class="w-3/4 md:w-1/2 max-w-95"
          />
          <button
            class="border border-dashed border-dark-primary px-6 py-1 mx-auto place-items-center"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </section>

      <section
        class="panel section bg-okja-yellow/50 place-content-center relative"
      >
        <h2
          class="panel__number opacity-30 font-extralight text-9xl dark:text-light-primary desktop:text-9xl absolute -top-1 left-4"
        >
          6
        </h2>

        <div class="panel__content md:text-4xl px-8 md:mx-8 desktop:w-2/3">
          <h3 class="font-bold text-2xl leading-6 mb-2 md:text-4xl md:mb-4">
            {{ $t("homeSectionTwo.sectionC.title") }}
          </h3>
          <p class="md:text-2xl">
            {{ $t("homeSectionTwo.sectionC.text") }}
          </p>

          <img
            src="/images/everyone/cats-with-sign.png"
            alt=""
            class="w-3/4 md:w-1/2 max-w-95"
          />
          <button
            class="border border-dashed border-dark-primary px-6 py-1 mx-auto place-items-center"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}

.section {
  width: 100vw;
  flex-shrink: 0;
}
</style>
