<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionRef = ref<HTMLElement | null>(null);

let offsets: number[] = [];
let totalOffset = 0;
let resizeHandler: (() => void) | null = null;
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!sectionRef.value) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".row", sectionRef.value!);

    const calculateOffsets = () => {
      totalOffset = 0;
      offsets = rows.map((row) => {
        const prev = totalOffset;
        const h1 = row.querySelector("h1");
        totalOffset += h1 ? h1.offsetHeight : 0;
        return prev;
      });

      ScrollTrigger.refresh();
    };

    calculateOffsets();
    resizeHandler = calculateOffsets;
    window.addEventListener("resize", resizeHandler);

    rows.forEach((row, i) => {
      const heading = row.querySelector(".left");
      if (!heading) return;
      const image = row.querySelector("img");
      if (!image) return;

      ScrollTrigger.create({
        trigger: heading,
        start: () => `top ${offsets[i]}`,
        endTrigger: sectionRef.value!,
        end: () => `bottom ${totalOffset}`,
        onEnter: () => gsap.to(image, { autoAlpha: 0, duration: 0.3 }),
        onLeaveBack: () => gsap.to(image, { autoAlpha: 1, duration: 0.3 }),
      });

      ScrollTrigger.create({
        trigger: heading,
        start: () => `top ${offsets[i]}`,
        endTrigger: sectionRef.value!,
        end: () => `bottom ${totalOffset}`,
        pin: heading,
        pinSpacing: false,
      });
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
  }
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef" class="font-yomogi relative xs:mt-40">
    <h2
      class="text-4xl font-bold text-center mx-auto px-2 mb-2 md:text-6xl md:mb-4"
    >
      {{ $t("homeSectionThree.title") }}
    </h2>
    <p
      class="text-center px-4 leading-5 mb-4 md:text-2xl md:leading-7 md:mb-16"
    >
      {{ $t("tour.intro") }}
    </p>
    <div class="row-wrap">
      <div class="row">
        <div class="left">
          <h1 class="font-black text-6xl text-center">
            {{ $t("homeSectionThree.moko.name") }}
          </h1>
          <img
            src="/images/moko/moko-hello-1.png"
            alt=""
            class="lg:max-w-100 md:mx-auto"
          />
        </div>
        <div
          class="right h-120 place-content-center bg-moko-blue/50 leading-5 px-2 shadow-sm relative sm:px-8"
        >
          <p
            class="opacity-30 top-0 left-4 text-9xl absolute dark:text-light-primary"
          >
            7.
          </p>
          <h4 class="font-bold text-lg md:text-4xl">
            {{ $t("homeSectionThree.about.moko") }}
          </h4>
          <p class="md:text-2xl md:leading-6 md:mt-2">
            {{ $t("homeSectionThree.moko.text") }}
          </p>

          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </div>

      <div class="row">
        <div class="left">
          <h1 class="font-black text-6xl text-center">
            {{ $t("homeSectionThree.niko.name") }}
          </h1>
          <img
            src="/images/niko/niko-hello-1.png"
            alt=""
            class="lg:max-w-100 md:mx-auto"
          />
        </div>
        <div
          class="right h-120 place-content-center bg-niko-purple/50 leading-5 px-2 shadow-sm relative sm:px-8"
        >
          <p
            class="opacity-30 top-0 left-4 text-9xl absolute dark:text-light-primary"
          >
            8.
          </p>
          <h4 class="font-bold text-lg md:text-4xl">
            {{ $t("homeSectionThree.about.niko") }}
          </h4>
          <p class="md:text-2xl md:leading-6 md:mt-2">
            {{ $t("homeSectionThree.niko.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </div>

      <div class="row">
        <div class="left">
          <h1 class="font-black text-6xl text-center">
            {{ $t("homeSectionThree.okja.name") }}
          </h1>
          <img
            src="/images/okja/okja-hello-1.png"
            alt=""
            class="lg:max-w-100 md:mx-auto"
          />
        </div>
        <div
          class="right h-120 place-content-center bg-okja-yellow/50 leading-5 px-2 shadow-sm relative sm:px-8"
        >
          <p
            class="opacity-30 top-0 left-4 text-9xl absolute dark:text-light-primary"
          >
            9.
          </p>
          <h4 class="font-bold text-lg md:text-4xl">
            {{ $t("homeSectionThree.about.okja") }}
          </h4>
          <p class="md:text-2xl md:leading-6 md:mt-2">
            {{ $t("homeSectionThree.okja.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </div>
    </div>
    <h5
      class="text-6xl font-bold text-center absolute bottom-20 left-1/2 md:bottom-96 md:text-9xl"
    >
      {{ $t("homeSectionThree.books") }}
    </h5>
    <img
      src="/images/bg-icons/arrow-bg.png"
      alt=""
      class="absolute -bottom-70 -rotate-12"
    />
    <div style="height: 100vh"></div>
  </section>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
  padding: 1rem;
  border-top: dashed 1px var(--mid);
}
.row .left {
  width: 40%;
}
.row .right {
  width: 60%;
}
.row + .row {
  margin-top: 50px;
}
.pin-spacer {
  /* to get around an odd browser rounding issue that happens when it gets converted to pixels */
  width: 40% !important;
}
</style>
