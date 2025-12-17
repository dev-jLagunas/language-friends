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
    // BLOCKS (images)
    gsap.set(".block", {
      zIndex: (i, _t, targets) => targets.length - i,
    });

    const images = gsap.utils.toArray<HTMLElement>(".block:not(:last-of-type)");

    images.forEach((image, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.value!,
            start: () => `top -${window.innerHeight * (i + 0.5)}`,
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(image, { height: 0 });
    });

    // TEXT PANELS
    gsap.set(".panel-text", {
      zIndex: (i, _t, targets) => targets.length - i,
    });

    const texts = gsap.utils.toArray<HTMLElement>(".panel-text");

    texts.forEach((text, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.value!,
            start: () => `top -${window.innerHeight * i}`,
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        .to(text, { opacity: 1, y: "50%", duration: 0.33 })
        .to(text, { opacity: 0, y: "0%", duration: 0.33 }, 0.66);
    });

    // PIN THE SECTION
    ScrollTrigger.create({
      trigger: sectionRef.value!,
      start: "top top",
      end: () => `+=${(images.length + 1) * window.innerHeight}`,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      // markers: true, // enable only for debugging
    });
  }, sectionRef.value);
});

onBeforeUnmount(() => {
  ctx?.revert();
});
</script>

<template>
  <section ref="sectionRef" class="font-yomogi">
    <div class="description panel hr-bottom">
      <div class="scroll-down">
        <div class="arrow"></div>
      </div>
    </div>

    <section class="black">
      <div class="text-wrap">
        <div class="panel-text pl-2 relative md:px-8">
          <p
            class="opacity-30 -top-24 md:-top-52 left-4 text-7xl md:text-9xl absolute dark:text-light-primary"
          >
            10.
          </p>
          <h2 class="font-bold text-xl mb-2 sm:text-2xl md:text-3xl">
            {{ $t("homeSectionFour.series.like.title") }}
          </h2>
          <p class="leading-4 sm:text-lg md:text-2xl md:leading-6">
            {{ $t("homeSectionFour.series.like.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 relative md:px-8">
          <p
            class="opacity-30 -top-24 md:-top-52 left-4 text-7xl md:text-9xl absolute dark:text-light-primary"
          >
            11.
          </p>
          <h2 class="font-bold text-xl mb-2 sm:text-2xl md:text-3xl">
            {{ $t("homeSectionFour.series.verb.title") }}
          </h2>
          <p class="leading-4 sm:text-lg md:text-2xl md:leading-6">
            {{ $t("homeSectionFour.series.verb.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 relative md:px-8">
          <p
            class="opacity-30 -top-24 md:-top-52 left-4 text-7xl md:text-9xl absolute dark:text-light-primary"
          >
            12.
          </p>
          <h2 class="font-bold text-xl mb-2 sm:text-2xl md:text-3xl">
            {{ $t("homeSectionFour.series.adjective.title") }}
          </h2>
          <p class="leading-4 sm:text-lg md:text-2xl md:leading-6">
            {{ $t("homeSectionFour.series.adjective.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 md:px-8 relative">
          <p
            class="opacity-30 -top-24 md:-top-52 left-4 text-7xl md:text-9xl absolute dark:text-light-primary"
          >
            13.
          </p>
          <h2 class="font-bold text-xl mb-2 sm:text-2xl md:text-3xl">
            {{ $t("homeSectionFour.series.dislike.title") }}
          </h2>
          <p class="leading-4 sm:text-lg md:text-2xl md:leading-6">
            {{ $t("homeSectionFour.series.dislike.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>

        <div class="panel-text pl-2 md:px-8 relative">
          <p
            class="opacity-30 -top-24 md:-top-52 left-4 text-7xl md:text-9xl absolute dark:text-light-primary"
          >
            14.
          </p>
          <h2 class="font-bold text-xl mb-2 sm:text-2xl md:text-3xl">
            {{ $t("homeSectionFour.series.friends.title") }}
          </h2>
          <p class="leading-4 sm:text-lg md:text-2xl md:leading-6">
            {{ $t("homeSectionFour.series.friends.text") }}
          </p>
          <button
            class="border border-dashed border-dark-primary mt-4 px-6 py-1 md:text-2xl dark:border-light-primary"
          >
            {{ $t("ui.cta") }}
          </button>
        </div>
      </div>

      <div class="p-wrap">
        <div class="block one"></div>
        <div class="block two"></div>
        <div class="block three"></div>
        <div class="block four"></div>
        <div class="block five"></div>
      </div>
    </section>

    <section class="panel plain"></section>
  </section>
</template>

<style scoped>
.scroller {
  height: 100vh;
}

.black {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.text-wrap {
  position: relative;
  width: 800px;
  height: 80vh;
}

.panel-text {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;
}

.p-wrap {
  position: relative;
  overflow: hidden;
  width: 50%;
  max-width: 600px;
  height: 80vh;
}

.block {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url("/images/mockups/book-mockup-2.png");
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
}

.block.two {
  background-image: url("/images/mockups/book-mockup-2.png");
}
.block.three {
  background-image: url("/images/mockups/book-mockup-2.png");
}
.block.four {
  background-image: url("/images/mockups/book-mockup-2.png");
}
</style>
